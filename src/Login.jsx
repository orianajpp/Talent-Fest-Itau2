import welcome from "./assets/welcome.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Login = () => <section className="Login">{UserForm()}</section>;

export default Login;

function UserForm() {
  return (
    <>
      <Header/>
      <div className="content-div">
        <div className="form">
          
          <h1>Bienvenido al asistente virtual.</h1>
          <label className="tittle">Iniciar sesión</label>
            <form className="form">
               <label htmlFor="">Correo</label>
            <input type="text" name="correo" id="" />
            <label htmlFor="">Contraseña</label>
            <input type="text" name="" id="" />
            </form>
           
            <button>Ingresar</button>
            <hr />
            <button>Tengo problemas para acceder</button>
          
        </div>

        <div>
          <img className="img-welcome" src={welcome} alt="welcome" />
        </div>
      </div>
      
      <Footer/>
    </>
  );
}
