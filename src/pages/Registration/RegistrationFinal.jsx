import "./RegistrationFinal.css";
import { useNavigate } from "react-router-dom";

function RegistrationFinal() {
  const navigate = useNavigate();

  return (
    <div className="final-page">
      {/* Navbar */}
      <div className="final-navbar">
        <div className="final-logo">elderPA</div>
      </div>

      {/* Content */}
      <div className="final-container">

        <div className="final-header">
          <h2>Application Approved</h2>

          <p>Your application has been sent for review</p>
        </div>

        {/* Card */}
        <div className="final-card">

          {/* Success Icon */}
          <div className="success-circle">
            ✓
          </div>

          <h3>Your application has been approved!</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Element.
          </p>

          <div className="divider"></div>

          <button
  className="portal-btn"
  onClick={() => navigate("/dashboard")}
>
  Access Portal
</button>

        </div>
      </div>
    </div>
  );
}

export default RegistrationFinal;