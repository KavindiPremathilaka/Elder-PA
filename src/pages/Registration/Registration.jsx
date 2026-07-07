import "./Registration.css";
import { useNavigate } from "react-router-dom";

export default function Registration() {

  const navigate = useNavigate();

  return (
    <div className="registration-page">

      {/* Navbar */}
      <div className="registration-navbar">

        <div className="navbar-logo">
          elderPA
        </div>

      </div>

      {/* Form Container */}
      <div className="registration-container">

        <h2>
          Service Provider Registration
        </h2>

        {/* Steps */}
        <div className="steps">

          <div className="step active">
            1. Business Details
          </div>

          <div className="step">
            2. Service Listings
          </div>

          <div className="step">
            3. Certifications
          </div>

          <div className="step">
            4. Agreements
          </div>

        </div>

        {/* Form */}
        <div className="registration-form">

          {/* LEFT */}
          <div className="left-fields">

            <label>Business Name</label>

            <input type="text" />

            <label>Email</label>

            <div className="verify-row">

              <input type="email" />

              <button className="verify-btn">
                Verify
              </button>

            </div>

            <label>Mobile Number</label>

            <div className="verify-row">

              <input type="text" />

              <button className="verify-btn">
                Verify
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="right-fields">

            <label>Business Address</label>

            <input type="text" />

            <div className="city-row">

              <div>

                <label>Select city</label>

                <input type="text" />

              </div>

              <div>

                <label>Zip code</label>

                <input type="text" />

              </div>

            </div>

            <label>Company Logo</label>

            <div className="upload-box">
              Click to upload image
            </div>

          </div>

        </div>

        {/* NEXT BUTTON */}
        <div className="next-btn-wrapper">

          <button
            className="next-btn"
            onClick={() => navigate("/register/step2")}
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}