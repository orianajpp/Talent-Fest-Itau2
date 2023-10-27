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
        <div><label className="title" >Verificación de seguridad</label></div>
        
        <div className="form-verification">
          
                <form  onSubmit={handleVerificationSubmit}>
                
                  <div><label>Código de verificación por mail</label></div>
                  <div><input type="text" name="" id="" onChange={handleChange} /></div>  
                  <div><button type="submit">Enviar</button></div>
                </form> 
        </div>
      </div>
       
      </>
    );
  }

export default Verification;