import Instructive from './components/Instructive';
import Categories from './components/Categories';


const Home = () => (
  <>
    <section className='Home'>
    <Categories title="RPA/Robot"/>
    <Categories title="Software/WorkFlow/BBDD"/>
    <Categories title="Soporte TI Robotic"/>
    </section>
    <Instructive/>
    </>
  );
  
  export default Home;
  
