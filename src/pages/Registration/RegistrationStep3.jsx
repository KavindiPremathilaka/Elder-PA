import "./RegistrationStep3.css";
import { useNavigate } from "react-router-dom";

function RegistrationStep3() {
  const navigate = useNavigate();

  return (
    <div className="reg3-page">

      {/* Navbar */}
      <div className="reg3-navbar">
        <div className="reg3-logo">elderPA</div>
      </div>

      {/* Main Card */}
      <div className="reg3-card">

        {/* Header */}
        <div className="reg3-header">
          <h2>Service Provider Registration</h2>

          <p>
            Register your agency as a service provider on elderPA
          </p>
        </div>

        {/* Steps */}
        <div className="reg3-steps">

          <div className="step completed">
            1. Business Details
          </div>

          <div className="step completed">
            2. Service Listings
          </div>

          <div className="step active">
            3. Certifications
          </div>

          <div className="step">
            4. Agreements
          </div>

        </div>

        {/* Upload Cards */}
        <div className="document-list">

          {/* Card 1 */}
          <div className="document-card">

            <div className="doc-left">
              <h4>Care Quality Certification</h4>

              <p>
                Upload your organisation certification document
              </p>
            </div>

            <div className="doc-right">

              <button className="download-btn">
                Download
              </button>

              <button className="upload-btn">
                Upload
              </button>

            </div>

          </div>

          {/* Card 2 */}
          <div className="document-card">

            <div className="doc-left">
              <h4>Operating Standards & Procedures</h4>

              <p>
                Upload organisation standards document
              </p>
            </div>

            <div className="doc-right">

              <button className="download-btn">
                Download
              </button>

              <button className="upload-btn">
                Upload
              </button>

            </div>

          </div>

          {/* Card 3 */}
          <div className="document-card">

            <div className="doc-left">
              <h4>Privacy Policy</h4>

              <p>
                Upload your privacy policy document
              </p>
            </div>

            <div className="doc-right">

              <button className="download-btn">
                Download
              </button>

              <button className="upload-btn">
                Upload
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Buttons */}
        <div className="reg3-buttons">

          <button
            className="back-btn"
            onClick={() => navigate("/register/step2")}
          >
            Back
          </button>

          <button
            className="next-btn"
            onClick={() => navigate("/register/step4")}
          >
            Next
          </button>

        </div>

      </div>
    </div>
  );
}

export default RegistrationStep3;