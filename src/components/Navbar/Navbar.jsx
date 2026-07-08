import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (  
    <nav className="navbar">

      <div className="logo">
    <img src={logo} alt="EPA Logo" width="158" height="65" />
    elder<span>PA</span>
</div>

      <ul className="nav-links">
        <li>About</li>
        <li>Features</li>
        <li>Services</li>
        <li>FAQ</li>
      </ul>

      <div className="nav-right">

        <Link to="/signin" className="login-link">
          Login
        </Link>

        <button className="career-btn">
          For Careers
        </button>

      </div>

    </nav>
  );
};

export default Navbar;