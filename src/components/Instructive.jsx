import instructiveCSS from "./Instructive.module.css";

function Instructive() {
  return (
    <div className={instructiveCSS.instructiveContainer}>
      <h1 className={instructiveCSS.title}>
        Instructivo para un buen uso del asistente virtual
      </h1>
      <ul className={instructiveCSS.instructive}>
        <li>Sé claro y conciso en tus preguntas y comandos.</li>
        <li>
          Lee las respuestas del asistente virtual con atención para asegurarte
          de que comprendes la información proporcionada.
        </li>
        <li>
          Si el asistente virtual no comprende tu pregunta o no puede
          proporcionar la información que necesitas, intenta reformular tu
          pregunta o ser más específico.
        </li>
      </ul>
      <h3 className={instructiveCSS.title}>Como interactuar con el asistente virtual</h3>
      <ul className={instructiveCSS.instructive}>
        <li>Escribe tu gerencia, por ejemplo: Finanzas</li>
        <li>
          Describe a un robot, por ejemplo: se encarga de descargar los archivos
          desde on-demand.
        </li>
        <li>
          Consulta sobre un requerimiento o incidente, por ejemplo: ¿Qué robot
          debo usar para comisiones CORFO?
        </li>
      </ul>
    </div>
  );
}

export default Instructive;
