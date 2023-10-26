import { Navigate } from "react-router-dom";


function Categories({ title }) {
    

   
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={() => handleOptionChange("requerimientos")}>
          Solicitudes y Requerimientos
        </button>
        <button onClick={() => handleOptionChange("incidencias")}>
          Reportar Incidencia
        </button>
      </div>
    );
  }
  export default Categories;