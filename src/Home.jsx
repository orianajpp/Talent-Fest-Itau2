import Instructive from './components/Instructive';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoriesCSS from './Categories.module.css'

const Home = () => (
  <>
    <section className='Home'>
      <Header etiquete="" isHomeView={true} />
      <div className={CategoriesCSS.container}>
      <Categories title="RPA/Robot" />
      <Categories title="Software/WorkFlow/BBDD" />
      <Categories title="Soporte TI Robotic" />
      </div>
    </section>
    <Instructive />
    <Footer/>
  </>
);

export default Home;
