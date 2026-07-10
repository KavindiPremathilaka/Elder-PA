import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Change this route after implementing authentication
    navigate("/dashboard");
  };

  return (
    <div className="signin-page">

      {/* Navbar */}
      <header className="signin-navbar">
        <div className="navbar-logo">
          elderPA
        </div>
      </header>

      {/* Login Card */}
      <div className="signin-container">

        {/* Left Panel */}
        <div className="signin-left">

          <div className="lock-box">
            <FaLock />
          </div>

          <h2>Sign In - Service Provider Portal</h2>

          <p className="subtitle">
            Access your elderPA service provider portal
          </p>

          <form className="signin-form">

            <input
              type="text"
              placeholder="Email ID or Mobile Number"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button
              type="button"
              className="signin-btn"
              onClick={handleSignIn}
            >
              Sign In
            </button>

          </form>

          <div className="register-section">

            <p className="register-text">
              Don't have an account?
              <span onClick={() => navigate("/register")}>
                {" "}Create here to register
              </span>
            </p>

            <button
              className="create-btn"
              onClick={() => navigate("/register")}
            >
              Create Account
            </button>

          </div>

          <p className="warning">
            Unauthorised access is a punishable offence by law.
          </p>

        </div>

        {/* Right Panel */}
        <div className="signin-right">

          
          <div className="logo">
              <img src={logo} alt="EPA Logo" width="158" height="65" />
              elder<span>PA</span>
          </div>

        </div>

      </div>

    </div>
  );
}