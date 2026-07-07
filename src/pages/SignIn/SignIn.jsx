import "./SignIn.css";
import { useNavigate } from "react-router-dom";

export default function SignIn() {

  const navigate = useNavigate();

  return (
    <div className="signin-page">

      {/* Navbar */}
      <div className="signin-navbar">
        <div className="navbar-logo">
          elderPA
        </div>
      </div>

      {/* Main Content */}
      <div className="signin-wrapper">

        {/* Left Side */}
        <div className="signin-card">

          <div className="lock-icon">
            🔒
          </div>

          <h2>
            Sign In - Service Provider Portal
          </h2>

          <p>
            Please enter your details below
          </p>

          <input
            type="text"
            placeholder="Email ID or Mobile Number"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button
            onClick={() => navigate("/register")}
          >
            Sign In
          </button>

          <div className="signup-text">

            Don’t have an account?

            <span
              onClick={() => navigate("/register")}
            >
              Create Account
            </span>

          </div>

          <small>
            Unauthorized access is prohibited by law.
          </small>

        </div>

        {/* Right Side */}
        <div className="signin-right">

          <img
            src="https://i.imgur.com/w7TGu8N.png"
            alt="elderPA"
          />

        </div>

      </div>

    </div>
  );
}