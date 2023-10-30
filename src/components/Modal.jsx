import { useNavigate } from "react-router-dom";
import "./modal.css";
//import Verification from "./Verification";

function Modal({ message, showModal, closeModal, activeComponent }) {
  const navigate = useNavigate();

  const handleCloseButtonClick = () => {
    closeModal(); // Cierra la modal
    if (activeComponent === "verification") {
      navigate("/"); // Redirige a la página de inicio de sesión (Verification)
    } else if (activeComponent === "errorlog") {
      // Aquí puedes agregar la lógica para redirigir a otra vista si es necesario
    }
  };
  return (
    <div className="modal" style={{ display: showModal ? "block" : "none" }}>
      <div className="div-btn-close-modal">
        <button className="close-button" onClick={handleCloseButtonClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-x"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M10 10l4 4m0 -4l-4 4" />
          </svg>
        </button>
      </div>
      <div className="div-message-modal">{message}</div>
    </div>
  );
}

export default Modal;
