import "./AdminCreateCR.css";

import {
  FaBell,
  FaSignOutAlt,
  FaHome,
  FaClipboardList,
  FaComments,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCog,
  FaChevronDown,
} from "react-icons/fa";

function AdminCreateCR() {
  return (
    <div className="admin-cr-page">

      {/* TOPBAR */}
      <div className="admin-topbar">

        <div className="admin-logo">
          elderPA
        </div>

        <div className="admin-topbar-right">

          <FaBell className="topbar-icon" />

          <div className="signout-btn">
            <FaSignOutAlt />
            <span>SIGN OUT</span>
          </div>

        </div>

      </div>

      {/* BODY */}
      <div className="admin-body">

        {/* SIDEBAR */}
        <div className="admin-sidebar">

          <div className="sidebar-item active-item">
            <FaHome />
            <span>Home</span>
          </div>

          <div className="sidebar-item">
            <FaClipboardList />
            <span>Care Requests</span>
            <FaChevronDown className="arrow" />
          </div>

          <div className="sidebar-submenu">

            <div className="submenu-active">
              Create New Request
            </div>

            <div>Pending</div>
            <div>Awaiting Match</div>
            <div>Provider Assigned</div>
            <div>Accepted Requests</div>
            <div>Assessment Completed</div>
            <div>Contract Pending</div>

          </div>

          <div className="sidebar-item">
            <FaClipboardList />
            <span>C. Packages & Services</span>
            <FaChevronDown className="arrow" />
          </div>

          <div className="sidebar-item">
            <FaComments />
            <span>Chat</span>
            <FaChevronDown className="arrow" />
          </div>

          <div className="sidebar-item">
            <FaCalendarAlt />
            <span>Schedule</span>
            <FaChevronDown className="arrow" />
          </div>

          <div className="sidebar-item">
            <FaMoneyBillWave />
            <span>Payments</span>
            <FaChevronDown className="arrow" />
          </div>

          <div className="sidebar-item">
            <FaCog />
            <span>Settings</span>
            <FaChevronDown className="arrow" />
          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="admin-main">

          {/* HEADER */}
          <div className="page-header">

            <div>
              <h2>Create Care Request</h2>
              <p>Post a care request on behalf of a client</p>
            </div>

            <div className="header-buttons">

              <button className="clear-btn">
                Clear Request
              </button>

              <button className="submit-btn">
                Submit Request
              </button>

            </div>

          </div>

          {/* CONTENT AREA */}
          <div className="content-layout">

            {/* LEFT CONTENT */}
            <div className="left-content">

              {/* PATIENT DETAILS */}
              <div className="section-card">

                <h3>Patient Details</h3>

                <div className="form-grid">

                  <div className="form-group">
                    <label>Customer Name</label>

                    <div className="input-with-btn">
                      <input type="text" placeholder="Select a customer..." />
                      <button>Create</button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Conditions</label>

                    <select>
                      <option>Select conditions</option>
                    </select>
                  </div>

                  <div className="form-group address-group">
                    <label>Required Address</label>

                    <div className="input-with-btn">
                      <input type="text" placeholder="Enter street address" />
                      <button>Map</button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Patient</label>

                    <div className="input-with-btn">
                      <input type="text" placeholder="Select a patient" />
                      <button>Create</button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Special Requirement</label>

                    <div className="input-with-btn">
                      <input type="text" placeholder="Select..." />
                      <button>Create</button>
                    </div>
                  </div>

                  <div className="city-row">

                    <select>
                      <option>Select city</option>
                    </select>

                    <input type="text" placeholder="Enter zip code" />

                  </div>

                </div>

              </div>

              {/* REQUESTED SERVICES */}
              <div className="section-card">

                <h3>Requested Services</h3>

                <table className="services-table">

                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Category</th>
                      <th>Service</th>
                      <th>Duration</th>
                      <th>Time of Day</th>
                      <th>Days</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>-</td>

                      <td>
                        <select>
                          <option>Select...</option>
                        </select>
                      </td>

                      <td>
                        <select>
                          <option>Select...</option>
                        </select>
                      </td>

                      <td>
                        <select>
                          <option>Select...</option>
                        </select>
                      </td>

                      <td>
                        <select>
                          <option>Select...</option>
                        </select>
                      </td>

                      <td>
                        <select>
                          <option>Select...</option>
                        </select>
                      </td>

                      <td>
                        <button className="add-btn">
                          Add to list
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Home Care</td>
                      <td>Domestic Care</td>
                      <td>2 Hours</td>
                      <td>Morning</td>
                      <td>Weekdays</td>
                      <td></td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Home Care</td>
                      <td>Cleaning</td>
                      <td>1 Hour</td>
                      <td>Morning</td>
                      <td>Mon, Wed, Fri</td>
                      <td></td>
                    </tr>

                  </tbody>

                </table>

              </div>

              {/* ASSESSMENT SLOTS */}
              <div className="section-card">

                <h3>Selected Assessment Slots</h3>

                <table className="slots-table">

                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Date</th>
                      <th>Day</th>
                      <th>Time Slots</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>1</td>
                      <td>16-Mar-2022</td>
                      <td>Wednesday</td>
                      <td>2.00 pm - 3.00 pm</td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* RIGHT PANEL */}
            <div className="availability-panel">

              <h3>Availability for Assessment</h3>

              <div className="calendar-box">

                <div className="calendar-header">
                  <span>←</span>
                  <h4>March</h4>
                  <span>→</span>
                </div>

                <div className="calendar-grid">

                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span className="selected-date">11</span>
                  <span>12</span>

                </div>

              </div>

              <div className="time-slots">

                <button>9.00 am - 10.00 am</button>
                <button>10.00 am - 11.00 am</button>
                <button>12.00 pm - 1.00 pm</button>

                <button className="active-slot">
                  2.00 pm - 3.00 pm
                </button>

                <button>3.00 pm - 4.00 pm</button>

                <button className="active-slot">
                  4.00 pm - 5.00 pm
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminCreateCR;