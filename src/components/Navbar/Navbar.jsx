import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
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