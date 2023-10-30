import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './verification.css';
import Errorlog from "./Errorlog"; // Importa el componente Errorlog

function Verification() {
  const navigate = useNavigate();

  const [num, setNum] = useState("");
  const [codeError, setCodeError] = useState("");
  const [isErrorlogVisible, setIsErrorlogVisible] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setNum(value);

    if (!/^\d{6}$/.test(value)) {
      setCodeError("Ingrese los 6 dígitos enviados por correo electrónico ");
    } else {
      setCodeError("");
    }
  };

  const handleVerificationSubmit = async (event) => {
    event.preventDefault();

    if (num.length !== 6) {
      setCodeError("Ingrese los 6 dígitos enviados por correo electrónico");
    } else {
      setCodeError("");

      if (num !== '130392') {
        setIsErrorlogVisible(true);
      } else {
        navigate('/Home');
      }
    }
  };

  const handleInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  };

  const handleModalClose = () => {
    setIsErrorlogVisible(false);
    // Recarga la página
  };

  return (
    <div className="verification">
      {isErrorlogVisible ? (
        <Errorlog onClose={handleModalClose} />
      ) : (
        <form onSubmit={handleVerificationSubmit}  className="form-verification">
          <div className="lab-title">
            <label className="title">Verificación de seguridad</label>
          </div>
          <div className="lab-title">
            <label>Código de verificación por correo</label>
          </div>
          <div className="div-input">
            <input
              className="inputs-login"
              type="text"
              maxLength={6}
              onInput={handleInput}
              onChange={handleChange}
              value={num}
            />
            <p className="error-message">{codeError}</p>
          </div>
          <div className="div-btn">
            <button className="btn" type="submit">Enviar</button>
          </div>
          <hr />
      <button className="btn btn_problem">Tengo problemas para acceder</button>
        </form>
      )}
      
    </div>
  );
}

export default Verification;
