import { useState } from "react";
import { APP_LOGO } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {

  const [btnLogin , setbtnLogin] = useState("Login")

  const onlineStatus = useOnlineStatus();

 

    return (
      <div className="flex justify-between bg-amber-100">
        <div className="logo-container">
       <Link to= "/">
       <img
            className="w-26 h-20 "
            src={APP_LOGO}
          />
       </Link> 
        </div>
        <div className="flex">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-3">
            <li className="m-2 p-2 hover:text-orange-600 hover:font-extrabold "><Link to="/instamart"> Instamart</Link></li>
          <li className="m-2 p-2">  {onlineStatus ? " online : 😍" : " offline : 😥"}</li>
          <li className="m-2 p-2"> 
          
          <Link to="/"> Home</Link>  </li>
            
            <li className="m-2 p-2"><Link to="/about"> About</Link></li>
            <li className="m-2 p-2">cart</li> 
            <li className="m-2 p-2"> <Link to="/contact"> contact</Link></li>
          <div className="m-2 p-2"><button onClick={() => {
              btnLogin === "Login" ? setbtnLogin("Logout") : setbtnLogin("Login")
            }}>{btnLogin}</button> </div> 
          </ul>
        </div>
      </div>
    );
  };

  export default Header;