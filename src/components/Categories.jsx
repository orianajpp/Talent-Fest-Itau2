import { useNavigate } from "react-router-dom";

function Categories({ title }) {
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    if (option === "requerimientos") {
      navigate("/FormRequest");  
    } else if (option === "incidencias") {
      navigate("/FormIncidence"); 
    }
  }

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