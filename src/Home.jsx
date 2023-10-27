import Instructive from './components/Instructive';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';




const Home = () => (
  <>
    <section className='Home'>
      <Header etiquete="" isHomeView={true} />
      <Categories title="RPA/Robot" />
      <Categories title="Software/WorkFlow/BBDD" />
      <Categories title="Soporte TI Robotic" />
    </section>
    <Instructive />
    <Footer/>
  </>
);

export default Home;
