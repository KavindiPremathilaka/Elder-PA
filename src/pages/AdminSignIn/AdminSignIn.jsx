import "./AdminSignIn.css";
import { FaLock } from "react-icons/fa";

function AdminSignIn() {
  return (
    <div className="admin-page">

      {/* TOP BAR */}
      <div className="admin-topbar">
        <div className="admin-brand">
          elderPA
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="admin-container">

        {/* LOGIN CARD */}
        <div className="admin-login-card">

          <div className="lock-box">
            <FaLock />
          </div>

          <h2>Sign In - EPA Admin Portal</h2>

          <p className="subtitle">
            Access elderPA administrator portal
          </p>

          <form>

            <input
              type="text"
              placeholder="Email ID or Mobile Number"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button type="submit">
              Sign In
            </button>

          </form>

          <div className="bottom-note">
            Unauthorised access is a punishable offence by law.
          </div>

        </div>

        {/* RIGHT SIDE LOGO */}
        <div className="admin-logo-side">

          <div className="logo-wrapper">
            <span className="elder-text">elder</span>
            <span className="pa-text">PA</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminSignIn;