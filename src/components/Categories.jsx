import { useNavigate } from "react-router-dom";
import CategoriesCSS from "../Categories.module.css"


function Categories({ title }) {
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    if (option === "requerimientos") {
      navigate("/Home/FormRequest");
    } else if (option === "incidencias") {
      navigate("/Home/FormIncidence");
    }
  }

  return (
    <div className={CategoriesCSS.categoriesContainer}>
      <h1 className={CategoriesCSS.title}>{title}</h1>
      <div className={CategoriesCSS.btnContainer}>

        <svg className={CategoriesCSS.iconContainer} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 13 21" fill="none" className={CategoriesCSS.iconSVG}>
          <path d="M2.43967 19.8168L12.4841 11.2096C12.6459 11.0708 12.7758 10.8987 12.8648 10.7051C12.9539 10.5114 13 10.3008 13 10.0876C13 9.87449 12.9539 9.66386 12.8648 9.4702C12.7758 9.27655 12.6459 9.10444 12.4841 8.96571L2.43967 0.3585C1.48092 -0.462934 0 0.218105 0 1.48043V18.6973C0 19.9596 1.48092 20.6407 2.43967 19.8168Z" fill="#252220" />
        </svg>

        <button onClick={() => handleOptionChange("requerimientos")}>
          Solicitudes y Requerimientos
        </button>
      </div>
      <div className={CategoriesCSS.btnContainer}>
        <svg className={CategoriesCSS.iconContainer} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 13 21" fill="none" className={CategoriesCSS.iconSVG}>
          <path d="M2.43967 19.8168L12.4841 11.2096C12.6459 11.0708 12.7758 10.8987 12.8648 10.7051C12.9539 10.5114 13 10.3008 13 10.0876C13 9.87449 12.9539 9.66386 12.8648 9.4702C12.7758 9.27655 12.6459 9.10444 12.4841 8.96571L2.43967 0.3585C1.48092 -0.462934 0 0.218105 0 1.48043V18.6973C0 19.9596 1.48092 20.6407 2.43967 19.8168Z" fill="#252220" />
        </svg>
        <button onClick={() => handleOptionChange("incidencias")}>
          Reportar Incidencia
        </button>
      </div>
    </div>
  );
}

export default Categories;