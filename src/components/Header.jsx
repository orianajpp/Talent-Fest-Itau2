import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { logOut } from "../firebase";
import "./header.css";

function Header(props) {
  const navigate = useNavigate();
  const isHomeView = props.isHomeView;
  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await logOut(navigate);
      navigate("/");
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
            {isHomeView ? (
              <button onClick={handleLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-power"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                  <path d="M12 4l0 8" />
                </svg>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
