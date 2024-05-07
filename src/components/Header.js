import { useState } from "react";
import { APP_LOGO } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {

  const [btnLogin , setbtnLogin] = useState("Login")

  const onlineStatus = useOnlineStatus();

 

    return (
      <div className="header">
        <div className="logo-container">
       <Link to= "/">
       <img
            className="logo"
            src={APP_LOGO}
          />
       </Link> 
        </div>
        <div className="nav-container">
          <ul>
          <li>  {onlineStatus ? " online : 😍" : " offline : 😥"}</li>
          <li> 
          
          <Link to="/"> Home</Link>  </li>
            
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