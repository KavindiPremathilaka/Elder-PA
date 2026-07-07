import "./CareRequestDetails.css";

import {
  FaBell,
  FaSignOutAlt,
  FaHome,
  FaClipboardList,
  FaComments,
  FaCalendarAlt,
  FaDatabase,
  FaMoneyBillWave,
  FaBuilding,
  FaUsers,
  FaLifeRing,
  FaChevronDown,
  FaArrowLeft,
  FaRegClock,
  FaPhoneAlt,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

function CareRequestDetails() {
  return (
    <div className="details-page">

      {/* TOPBAR */}
      <div className="details-topbar">

        <div className="details-logo">
          elderPA
        </div>

        <div className="details-top-right">

          <FaBell className="top-icon" />

          <div className="signout">
            <FaSignOutAlt />
            <span>SIGN OUT</span>
          </div>

        </div>

      </div>

      {/* BODY */}
      <div className="details-body">

        {/* SIDEBAR */}
        <div className="details-sidebar">

          <div className="menu-item">
            <div className="menu-left">
              <FaHome />
              <span>Home</span>
            </div>
          </div>

          {/* CARE REQUESTS */}
          <div className="menu-item active-menu">

            <div className="menu-left">
              <FaClipboardList />
              <span>Care Requests</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          <div className="submenu">

            <div className="submenu-active">
              New Requests
            </div>

            <div>Accepted Requests</div>

            <div>Assessment Completed</div>

            <div>Contract Pending</div>

          </div>

          {/* PACKAGES */}
          <div className="menu-item">

            <div className="menu-left">
              <FaClipboardList />
              <span>C. Packages & Services</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          <div className="submenu">
            <div>Ongoing / Active</div>
            <div>Completed</div>
            <div>Cancelled</div>
          </div>

          {/* CHAT */}
          <div className="menu-item">

            <div className="menu-left">
              <FaComments />
              <span>Chat</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* SCHEDULE */}
          <div className="menu-item">

            <div className="menu-left">
              <FaCalendarAlt />
              <span>Schedule</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* DATABASE */}
          <div className="menu-item">

            <div className="menu-left">
              <FaDatabase />
              <span>Patient Database</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* PAYMENTS */}
          <div className="menu-item">

            <div className="menu-left">
              <FaMoneyBillWave />
              <span>Payments</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* AGENCY PROFILE */}
          <div className="menu-item">

            <div className="menu-left">
              <FaBuilding />
              <span>Agency Profile</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* USERS */}
          <div className="menu-item">

            <div className="menu-left">
              <FaUsers />
              <span>Users</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* SUPPORT */}
          <div className="menu-item">

            <div className="menu-left">
              <FaLifeRing />
              <span>Support</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="details-content">

          {/* HEADER */}
          <div className="details-header">

            <div className="details-title">

              <div className="title-row">
                <FaArrowLeft className="back-icon" />

                <div>
                  <h2>Care Request #EPA0009</h2>
                  <p>Detailed view of care request lead</p>
                </div>
              </div>

            </div>

            <div className="details-actions">

              <div className="timer-box">
                <FaRegClock />
                <span>09m : 48s</span>
              </div>

              <button className="decline-btn">
                Decline Request
              </button>

              <button className="accept-btn">
                Accept Request
              </button>

            </div>

          </div>

          {/* TABS */}
          <div className="tabs">

            <div className="tab active-tab">
              SUMMARY
            </div>

            <div className="tab">
              CHAT
            </div>

            <div className="tab">
              COSTING
            </div>

            <div className="tab">
              LOGS
            </div>

          </div>

          <div className="details-layout">

            {/* LEFT SIDE */}
            <div className="details-left">

              {/* INFO TABLE */}
              <div className="info-card">

                <div className="info-row">
                  <div>
                    <strong>Request Date</strong>
                    <p>15-March-2020 at 09:30am</p>
                  </div>

                  <div>
                    <strong>Last Updated</strong>
                    <p>15-March-2020 at 09:45am</p>
                  </div>
                </div>

                <div className="info-row">
                  <div>
                    <strong>Customer</strong>
                    <p>Jane Doe</p>
                  </div>

                  <div>
                    <strong>For/Patient</strong>
                    <p>Martha Wyatt (Mother)</p>
                  </div>
                </div>

                <div className="info-row">
                  <div>
                    <strong>Conditions</strong>
                    <p>Visual Impaired, Hoist Assisted</p>
                  </div>

                  <div>
                    <strong>Extra Requirements</strong>
                    <p>Hoist</p>
                  </div>
                </div>

              </div>

              {/* REQUESTED SERVICES */}
              <div className="section">

                <h3>Requested Services</h3>

                <table className="details-table">

                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Category</th>
                      <th>Service</th>
                      <th>Duration</th>
                      <th>Time of Day</th>
                      <th>Days</th>
                      <th>Cost</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>1</td>
                      <td>Home Care</td>
                      <td>Domestic Care</td>
                      <td>2 Hours</td>
                      <td>Morning</td>
                      <td>Weekdays</td>
                      <td>n/a</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Home Care</td>
                      <td>Cleaning</td>
                      <td>1 Hour</td>
                      <td>Morning</td>
                      <td>Mon, Wed, Fri</td>
                      <td>n/a</td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Home Care</td>
                      <td>Meal Preparation</td>
                      <td>1 Hour</td>
                      <td>Morning, Night</td>
                      <td>Mon, Wed, Fri</td>
                      <td>n/a</td>
                    </tr>

                  </tbody>

                </table>

              </div>

              {/* AVAILABILITY */}
              <div className="section">

                <h3>Availability for Assessment</h3>

                <table className="details-table">

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
                      <td>16-March-2022</td>
                      <td>Wednesday</td>

                      <td>
                        <div className="time-slots">

                          <span>9:00 am - 10:00 am</span>

                          <span>12:00 pm - 1:00 pm</span>

                          <span>2:00 pm - 3:00 pm</span>

                          <span>4:00 pm - 5:00 pm</span>

                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>18-March-2022</td>
                      <td>Friday</td>

                      <td>
                        <div className="time-slots">

                          <span>2:00 pm - 3:00 pm</span>

                          <span>4:00 pm - 5:00 pm</span>

                        </div>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="profile-card">

              <img
                src="https://i.pravatar.cc/120?img=5"
                alt="profile"
              />

              <h3>Jane Doe</h3>

              <p className="since-text">
                Since 1st January 2022
              </p>

              <button className="profile-btn">
                View Full Profile
              </button>

              <div className="profile-info">

                <div className="profile-row">
                  <span>Contact</span>
                  <strong>+44 123 444 222</strong>
                </div>

                <div className="profile-row">
                  <span>Email ID</span>
                  <strong>jane.doe@email.com</strong>
                </div>

                <div className="profile-row">
                  <span>Street Address</span>
                  <strong>101, Baker Street</strong>
                </div>

                <div className="profile-row">
                  <span>City</span>
                  <strong>London</strong>
                </div>

                <div className="profile-row">
                  <span>Post Code</span>
                  <strong>LNY1011</strong>
                </div>

              </div>

              <div className="profile-buttons">

                <button>
                  <FaPhoneAlt />
                  Call Phone
                </button>

                <button>
                  <FaEnvelope />
                  Send Email
                </button>

                <button>
                  <FaCommentDots />
                  Start Chat
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CareRequestDetails;