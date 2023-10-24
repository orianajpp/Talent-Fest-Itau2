import Logo from '../assets/Logo.png';
import './header.css'

function Header() {
    return(
        <>
        <header className='header'>
            <div className='introduction-div'>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <label className='interface-name'>Inicio de Sesión</label>
            </div>
            <div className='closed-div'></div>
        </header>
        </>
    )
   

}
export default Header;