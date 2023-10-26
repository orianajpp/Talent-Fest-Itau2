import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Verification() {

    const navigate = useNavigate();

    const [num, setNum] = useState({
        num: "",
    });

    const handleChange = (event) => {
        setNum({ ...num, [event.target.name]: event.target.value });
      };
  
    const handleVerificationSubmit = (event) => {
      event.preventDefault();


      if (!num) {
        console.log("Faltan campos por llenar");
        return;
      }

      alert('codigo correcto');
      navigate('/Home');
   
     
    }
  
    return (
      <>
      <div className="verification"> 
        <label className="title" >Verificación de seguridad</label>
        <form className="form-verification" onSubmit={handleVerificationSubmit}>
          <label>Código de verificación por mail</label>
          <input type="text" name="" id="" onChange={handleChange} />
          <button type="submit">Enviar</button>
        </form>
      </div>
       
      </>
    );
  }

export default Verification;