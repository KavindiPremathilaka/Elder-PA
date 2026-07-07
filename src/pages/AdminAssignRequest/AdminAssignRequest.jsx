import "./AdminAssignRequest.css";

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
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

function AdminAssignRequest() {
  return (
    <div className="assign-page">

      {/* TOPBAR */}
      <div className="assign-topbar">

        <div className="assign-logo">
          elderPA
        </div>

        <div className="assign-topbar-right">

          <FaBell />

          <div className="assign-signout">
            <FaSignOutAlt />
            <span>SIGN OUT</span>
          </div>

        </div>

      </div>

      {/* BODY */}
      <div className="assign-body">

        {/* SIDEBAR */}
        <div className="assign-sidebar">

          <div className="sidebar-item">
            <FaHome />
            <span>Home</span>
          </div>

          <div className="sidebar-item active-menu">
            <FaClipboardList />
            <span>Care Requests</span>
            <FaChevronDown className="arrow" />
          </div>

          <div className="submenu">

            <div>Create New Request</div>

            <div className="submenu-active">
              Pending
            </div>

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
        <div className="assign-main">

          {/* HEADER */}
          <div className="assign-header">

            <div>
              <h2>Care Request #EPA0009</h2>
              <p>Detailed view of care request lead</p>
            </div>

            <div className="assign-actions">

              <div className="timer-box">
                <FaClock />
                <span>09m : 48s</span>
              </div>

              <button className="bidding-btn">
                Open for Bidding
              </button>

              <button className="assign-btn">
                Assign Request
              </button>

            </div>

          </div>

          {/* CONTENT */}
          <div className="assign-layout">

            {/* LEFT SIDE */}
            <div className="assign-left">

              {/* TABS */}
              <div className="tabs-row">

                <div className="active-tab">
                  SUMMARY
                </div>

                <div>CHAT</div>

                <div>COSTING</div>

                <div>LOGS</div>

              </div>

              {/* SUMMARY TABLE */}
              <div className="summary-card">

                <table>

                  <tbody>

                    <tr>
                      <td>Request Date</td>
                      <td>15-March-2020 at 09.30am</td>
                      <td>Last Updated</td>
                      <td>15-March-2020 at 09.45am</td>
                    </tr>

                    <tr>
                      <td>Customer</td>
                      <td>Jane Doe</td>
                      <td>For/Patient</td>
                      <td>Martha Wyatt (Mother)</td>
                    </tr>

                    <tr>
                      <td>Conditions</td>
                      <td>Visual Impaired, Hoist Assisted</td>
                      <td>Extra Requirements</td>
                      <td>Hoist</td>
                    </tr>

                  </tbody>

                </table>

              </div>

              {/* SERVICES */}
              <div className="services-card">

                <h3>Requested Services</h3>

                <table>

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
              <div className="availability-card">

                <h3>Availability for Assessment</h3>

                <table>

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

                      <td className="slot-tags">

                        <span>9.00 am - 10.00 am</span>
                        <span>12.00 pm - 1.00 pm</span>
                        <span>2.00 pm - 3.00 pm</span>
                        <span>4.00 pm - 5.00 pm</span>

                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>18-March-2022</td>
                      <td>Friday</td>

                      <td className="slot-tags">

                        <span>2.00 pm - 3.00 pm</span>
                        <span>4.00 pm - 5.00 pm</span>

                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* RIGHT PROFILE */}
            <div className="profile-panel">

              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
              />

              <h4>Jane Doe</h4>

              <p>Since 1st January 2022</p>

              <button className="profile-btn">
                View Full Profile
              </button>

              <div className="profile-details">

                <div>
                  <span>Contact</span>
                  <p>+44 123 444 222</p>
                </div>

                <div>
                  <span>Email ID</span>
                  <p>jane@bestemail.com</p>
                </div>

                <div>
                  <span>Street Address</span>
                  <p>101, Baker Street</p>
                </div>

                <div>
                  <span>City</span>
                  <p>London</p>
                </div>

                <div>
                  <span>Post Code</span>
                  <p>LNY1011</p>
                </div>

              </div>

              <div className="profile-actions">

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

export default AdminAssignRequest;