import "./RegistrationStep2.css";
import { useNavigate } from "react-router-dom";

function RegistrationStep2() {
  const navigate = useNavigate();

  return (
    <div className="reg2-page">

      {/* Navbar */}
      <div className="reg2-navbar">
        <div className="reg2-logo">elderPA</div>
      </div>

      {/* Main Container */}
      <div className="reg2-card">

        {/* Header */}
        <div className="reg2-header">
          <h2>Service Provider Registration</h2>

          <p>
            Register your agency as a service provider on elderPA
          </p>
        </div>

        {/* Steps */}
        <div className="reg2-steps">

          <div className="step completed">
            1. Business Details
          </div>

          <div className="step active">
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
        <div className="reg2-form">

          {/* Left Side */}
          <div className="form-left">

            <div className="field-group">
              <label>Service Name</label>

              <input
                type="text"
                placeholder="Enter service name"
              />
            </div>

            <div className="field-group">
              <label>Service Category</label>

              <select>
                <option>Select a category</option>
              </select>
            </div>

            <div className="field-group">
              <label>Service Sub-Category</label>

              <select>
                <option>Select a sub-category</option>
              </select>
            </div>

          </div>

          {/* Right Side */}
          <div className="form-right">

            <div className="field-group">
              <label>Description</label>

              <textarea
                placeholder="Enter service description"
              />
            </div>

            <div className="field-group">
              <label>Pricing</label>

              <div className="price-row">

                <input
                  type="text"
                  placeholder="£0.00"
                />

                <select>
                  <option>Per hour</option>
                </select>

              </div>
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="reg2-buttons">

          <button className="add-btn">
            + Add to Service List
          </button>

          <button
            className="next-btn"
            onClick={() => navigate("/register/step3")}
          >
            Next
          </button>

        </div>

        {/* Table */}
        <div className="service-table">

          <div className="table-header">
            <span>Service Name</span>
            <span>Category</span>
            <span>Sub-Category</span>
            <span>Pricing</span>
            <span>Actions</span>
          </div>

          <div className="table-row">
            <span>Basic Domestic Care</span>
            <span>Home Care</span>
            <span>Domestic Care</span>
            <span>£20 per hour</span>

            <div className="actions">
              <button>✏</button>
              <button>🗑</button>
            </div>
          </div>

          <div className="table-row">
            <span>Premium Domestic Care</span>
            <span>Live In Care</span>
            <span>Domestic Care</span>
            <span>£100 per day</span>

            <div className="actions">
              <button>✏</button>
              <button>🗑</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default RegistrationStep2;