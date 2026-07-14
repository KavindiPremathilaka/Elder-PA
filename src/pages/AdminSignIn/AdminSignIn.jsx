import "./AdminSignIn.css";
import { FaLock } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

function AdminSignIn() {
  return (
    <div className="admin-page">

      {/* Top Navigation */}
      <header className="admin-header">
        <div className="admin-header-title">
          elderPA
        </div>
      </header>

      {/* Main Content */}
      <main className="admin-main">

        <div className="signin-card">

          {/* LEFT SIDE */}
          <div className="signin-left">

            <div className="lock-icon">
              <FaLock />
            </div>

            <h2 className="signin-title">
              Sign In - EPA Admin Portal
            </h2>

            <p className="signin-subtitle">
              Access elderPA administrator portal
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

              <button type="submit">
                Sign In
              </button>

            </form>

            <div className="bottom-divider"></div>

            <p className="warning-text">
              Unauthorised access is a punishable offence by law.
            </p>

          </div>

          {/* RIGHT SIDE */}

          <div className="signin-right">

  <div className="brand-container">

    <img
      src={logo}
      alt="elderPA Logo"
      className="elderpa-logo"
    />

    <div className="brand-text">
      <span className="elder-text">elder</span>
      <span className="pa-text">PA</span>
    </div>

  </div>

</div>

        </div>

      </main>

    </div>
  );
}

export default AdminSignIn;