import Instructive from "./components/Instructive";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesCSS from "./Categories.module.css";

const Home = () => (
  <>
    <Header etiquete="" isHomeView={true} />
    <section className={CategoriesCSS.home}>
    <h1>Robotic</h1>
      <section>
        <div className={CategoriesCSS.container}>
          <Categories title="RPA/Robot" />
          <Categories title="Software/WorkFlow/BBDD" />
          <Categories title="Soporte TI Robotic" />
        </div>
      </section>
      <section className={CategoriesCSS.descriptionContainer}>
        <h2> RPA/Robot:</h2>
        <p>
          En esta categoría podrás seleccionar tickets relacionados con un robot
        </p>
        <h2> Software/Workflow/BBDD:</h2>
        <p>
          En esta categoría podrás seleccionar tickets relacionados con
          elementos de robotics (sitio web, aplicativos web, BBDD robotics,
          entre otros).
        </p>
        <h2> *Soporte TI Robotic:</h2>
        <p>
          En esta categoría podrás seleccionar tickets relacionados al soporte
          de robot, RPA, robotic, aplicativos banco, entre otros.
        </p>
      </section>
      </section>
    <Footer />
  </>
);

export default Home;
