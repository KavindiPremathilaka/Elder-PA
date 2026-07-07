import { useNavigate } from "react-router-dom";
import "./NewRequestsPage.css";

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
  FaSearch,
  FaFilter,
  FaEye,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

function NewRequestsPage() {
  const navigate = useNavigate();

  const requestData = [
    {
      id: "EPA0009",
      date: "15-Mar-2022",
      acName: "Jane Doe",
      patient: "Martha Wyatt",
      requestType: "Assisted",
      category: "Home Care",
      costing: "n/a",
      timer: "09m : 48s",
      timerClass: "timer-green",
    },
    {
      id: "EPA0008",
      date: "15-Mar-2022",
      acName: "Sam Collins",
      patient: "Sam Collins",
      requestType: "Non-Assisted",
      category: "Live In Care",
      costing: "£125/week",
      timer: "08m : 32s",
      timerClass: "timer-green",
    },
    {
      id: "EPA0007",
      date: "15-Mar-2022",
      acName: "Derrik Jones",
      patient: "Alex Jones",
      requestType: "Non-Assisted",
      category: "Home Care",
      costing: "£80/hour",
      timer: "07m : 10s",
      timerClass: "timer-green",
    },
    {
      id: "EPA0006",
      date: "15-Mar-2022",
      acName: "Arthur Morgan",
      patient: "James Morgan",
      requestType: "Non-Assisted",
      category: "Other Services",
      costing: "£90/week",
      timer: "04m : 48s",
      timerClass: "timer-orange",
    },
    {
      id: "EPA0005",
      date: "15-Mar-2022",
      acName: "Nathan Drake",
      patient: "Eddie Collins",
      requestType: "Non-Assisted",
      category: "Home Care",
      costing: "£240/week",
      timer: "03m : 58s",
      timerClass: "timer-orange",
    },
    {
      id: "EPA0003",
      date: "15-Mar-2022",
      acName: "Peter Davidson",
      patient: "Alice Davidson",
      requestType: "Assisted",
      category: "Live In Care",
      costing: "n/a",
      timer: "01m : 39s",
      timerClass: "timer-red",
    },
    {
      id: "EPA0001",
      date: "14-Mar-2022",
      acName: "Roger Moore",
      patient: "Roger Moore",
      requestType: "Assisted",
      category: "Home Care",
      costing: "n/a",
      timer: "00m : 00s",
      timerClass: "timer-red",
    },
  ];

  return (
    <div className="request-page">

      {/* TOPBAR */}
      <div className="request-topbar">

        <div className="request-logo">
          elderPA
        </div>

        <div className="request-top-right">

          <FaBell className="top-icon" />

          <div className="signout">
            <FaSignOutAlt />
            <span>SIGN OUT</span>
          </div>

        </div>

      </div>

      {/* BODY */}
      <div className="request-body">

        {/* SIDEBAR */}
        <div className="request-sidebar">

          {/* HOME */}
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
        <div className="request-content">

          {/* HEADER */}
          <div className="request-header">

            <div className="request-title">
              <h2>New Care Requests</h2>
              <p>Sample subheading text</p>
            </div>

            <div className="request-actions">

              <button className="filter-btn">
                <FaFilter />
                <span>Filters</span>
              </button>

              <div className="search-box">

                <FaSearch className="search-icon" />

                <input
                  type="text"
                  placeholder="Search ..."
                />

              </div>

            </div>

          </div>

          {/* TABLE */}
          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>A/C Name</th>
                  <th>Patient</th>
                  <th>Request Type</th>
                  <th>Category</th>
                  <th>Costing</th>
                  <th>Timer</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {requestData.map((request, index) => (
                  <tr key={index}>

                    <td>{request.id}</td>

                    <td>{request.date}</td>

                    <td>{request.acName}</td>

                    <td>{request.patient}</td>

                    <td>{request.requestType}</td>

                    <td>{request.category}</td>

                    <td>{request.costing}</td>

                    <td className={request.timerClass}>
                      {request.timer}
                    </td>

                    <td className="action-buttons">

                      <button
  className="view-btn"
  onClick={() => navigate("/care-request-details")}
>
  <FaEye />
</button>

                      <button className="approve-btn">
                        <FaCheck />
                      </button>

                      <button className="reject-btn">
                        <FaTimes />
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default NewRequestsPage;