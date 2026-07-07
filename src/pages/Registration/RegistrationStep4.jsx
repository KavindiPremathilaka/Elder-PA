import "./RegistrationStep4.css";
import { useNavigate } from "react-router-dom";

function RegistrationStep4() {
  const navigate = useNavigate();

  return (
    <div className="reg4-page">

      {/* NAVBAR */}
      <div className="reg4-navbar">
        <div className="reg4-logo">elderPA</div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="reg4-wrapper">

        {/* HEADER */}
        <div className="reg4-header">

          <h2>Application Submitted</h2>

          <p>
            Your application has been sent for review
          </p>

        </div>

        {/* CARD */}
        <div className="review-card">

          <h3>
            Your application is being reviewed by our team.
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* STATUS STEPS */}
          <div className="review-steps">

            <div className="review-step completed">
              <span className="circle">✓</span>

              <span>Business Profile Review</span>
            </div>

            <div className="review-step">
              <span className="circle"></span>

              <span>Credit History Review</span>
            </div>

            <div className="review-step">
              <span className="circle"></span>

              <span>Sample Step 3</span>
            </div>

            <div className="review-step">
              <span className="circle"></span>

              <span>Sample Step 4</span>
            </div>

          </div>

          {/* BUTTON */}
          <div className="support-btn-wrapper">

            <button
              className="support-btn"
              onClick={() => navigate("/register/final")}
            >
              Contact Support
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default RegistrationStep4;