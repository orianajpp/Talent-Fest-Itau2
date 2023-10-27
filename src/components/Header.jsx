import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { logOut } from "../firebase";
import "./header.css";

const userLogin = localStorage.getItem('user');

function Header(props) {
  const navigate = useNavigate();
  const isHomeView = props.isHomeView; 
  const handleLogout = async(event) => {
    event.preventDefault();
    try {
      if (userLogin) {
        // console.log(logOut)
        await logOut(navigate);
        localStorage.clear();
        navigate('/');
      } else {
        console.log('hola');
      }
    } catch (err) {
      console.error(err.message);
    }
    
  };

  return (
    <>
      <header className="header">
        <div className="div-header">
          <div className="introduction-div">
            <img src={Logo} alt="Logo" />
            <div className="div-interface-name">
              <label className="interface-name">{props.etiquete}</label>
            </div>
          </div>

          <div className="closed-div">
            {isHomeView ? <button onClick={handleLogout}>Cerrar sesión</button> : ""}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
