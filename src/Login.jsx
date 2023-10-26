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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoginVisible, setIsLoginVisible] = useState(true); // Nuevo estado para controlar la visibilidad del inicio de sesión

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!contactInfo.email || !contactInfo.password) {
      console.log("Faltan campos por llenar");
      return;
    }

    try {
      const response = await signIn(contactInfo.email, contactInfo.password);
      if (response) {
        setModalMessage('hola',<Verification/>);
        setIsModalVisible(true);
        setIsLoginVisible(false);
      }
    } catch (error) {
      console.log("No pude iniciar sesión:", error);
    }
  };

  return (
    <>
      <Header />
      {isLoginVisible && (
        <div className="content-div">
          <div className="form form-div">
            <h1>Bienvenido al asistente virtual.</h1>
            <label className="tittle">Iniciar sesión</label>
            <form className="form" onSubmit={handleSubmit}>
              <label className="tittle label-input">Correo</label>
              <input
                className="inputs-login"
                type="email"
                name="email"
                placeholder="👤︎  Email"
                value={contactInfo.email}
                onChange={handleChange}
              />
              <label className="tittle label-input">Contraseña</label>
              <input
                className="inputs-login"
                type="password"
                name="password"
                placeholder="🔒︎  Password"
                value={contactInfo.password}
                onChange={handleChange}
              />
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