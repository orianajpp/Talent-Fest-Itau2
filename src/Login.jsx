import welcome from "./assets/welcome.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { signIn } from "./firebase";
import  Modal from "./components/modal";
import Verification from "./components/Verification";

const Login = () => {
  

  const [contactInfo, setContactInfo] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoginVisible, setIsLoginVisible] = useState(true); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactInfo({ ...contactInfo, [name]: value });
  
    // Verifica si el correo no está en un formato válido
    if (name === "email" && !isValidEmail(value)) {
      setEmailError("Correo no válido");
    } else {
      setEmailError(""); // Borra el mensaje de error si el correo es válido
    }
   
    
    if (name === "password" && (value.length < 6 || value.length > 10)) {
      setPasswordError("Ingrese contraseña correcta");
    } else {
      setPasswordError(""); // Borra el mensaje de error si la contraseña cumple con los requisitos
    }



    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };


 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!contactInfo.email || !contactInfo.password) {
      alert('Se requiere completar los campos de Correo y Contraseña')
      return;
    }

    try {
      const response = await signIn(contactInfo.email, contactInfo.password);
      console.log(response, "si yofuera tu")
      if (response) {
        setModalMessage(<Verification/>);
        setIsModalVisible(true);
        setIsLoginVisible(false);
      }
    } catch (error) {
      console.log("No pude iniciar sesión:", error);
    }
  };
  
  

  return (
    <>
      <Header etiquete="Inicio de sesión"/>
      {isLoginVisible && (
        <div className="content-div">
          <div className="form form-div">
            <h1>Bienvenido al asistente virtual.</h1>
            <label className="title">Iniciar sesión</label>
            <form className="form" onSubmit={handleSubmit}>
              <label className="label-input">Correo</label>
              <input
                className="inputs-login"
                type="email"
                name="email"
                placeholder="✉ Ejemplo@itau.cl"
                value={contactInfo.email}
                onChange={handleChange}
                
              />
              <p className="error-message">{emailError}</p>
              <label className="label-input">Contraseña</label>
              <input
                className="inputs-login"
                type="password"
                name="password"
                placeholder="🔒︎ Ingresa contraseña"
                value={contactInfo.password}
                onChange={handleChange}
              />
              <p className="error-message">{passwordError}</p>
              <button className="btn" type="submit">Ingresar</button>
            </form>

            <hr />
            <button className="btn btn_problem">Tengo problemas para acceder</button>
          </div>

          <div >
            <img className="img-welcome" src={welcome} alt="welcome" />
          </div>
        </div>
      )}

      {isModalVisible && (
        <Modal message={modalMessage} showModal={isModalVisible} closeModal={() => setIsModalVisible(false)} />
      )}
     

      <Footer />
    </>
  );
};

export default Login;

function isValidEmail(email) {
  // Utiliza una expresión regular para verificar el formato del correo
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}