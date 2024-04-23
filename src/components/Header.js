import { APP_LOGO } from "../Utils/constants";


const Header = () => {
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
          <li>Home</li>
            <li>About</li>
            <li>cart</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;