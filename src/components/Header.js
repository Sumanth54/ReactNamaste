import { useState } from "react";
import { APP_LOGO } from "../Utils/constants";
import { Link } from "react-router-dom";


const Header = () => {

  const [btnLogin , setbtnLogin] = useState("Login")
    return (
      <div className="header">
        <div className="logo-container">
        <img
            className="logo"
            src={APP_LOGO}
          />
        </div>
        <div className="nav-container">
          <ul>
          <li> <Link to="/"> Home</Link>  </li>
            
            <li><Link to="/about"> About</Link></li>
            <li>cart</li>
            <li><Link to="/contact"> contact</Link></li>
            <button onClick={() => {
              btnLogin === "Login" ? setbtnLogin("Logout") : setbtnLogin("Login")
            }}>{btnLogin}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;