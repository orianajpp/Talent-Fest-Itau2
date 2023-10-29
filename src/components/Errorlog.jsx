import './errorlog.css';

function Errorlog({ onClose }) {
  return (
    <>
      <div className="div-error-log">
        <div>
          <label className='title'>Error al iniciar</label>
        </div>
        <div> <li className='lab-title'>Ingresaste una contraseña no válida</li></div>
        <div> <li className='lab-title'>Intenta nuevamente</li></div>
        <div> 
          <button className="btn btn_problem" onClick={onClose}>
            Pedir asistencia en línea
          </button>
        </div>
      </div>
    </>
  );
}

export default Errorlog;
