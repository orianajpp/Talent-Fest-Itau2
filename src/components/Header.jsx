import Logo from '../assets/Logo.png';
import './header.css';

function Header(props) {
  const isHomeView = props.isHomeView; // Obtén el valor de isHomeView de las props

  return (
    <>
      <header className='header'>
        <div className='div-header'>
          <div className='introduction-div'>
            <img src={Logo} alt="Logo" />
            <div className='div-interface-name'><label className='interface-name'>{props.etiquete}</label></div>
            
          </div>
          

             <div className='closed-div'>
                {isHomeView ? <button>Cerrar sesión</button> : ""}
            </div>
        </div>
        
      </header>
    </>
  );
}

export default Header;
