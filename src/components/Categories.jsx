import { Navigate } from "react-router-dom";


function Categories({ title, handleOptionChange }) {
    const [selectedOption, setSelectedOption] = useState('requerimientos');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
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