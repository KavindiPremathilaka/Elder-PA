import { useNavigate } from "react-router-dom";
import "./SPNavbar.css";

import {
  FaHome,
  FaClipboardList,
  FaComments,
  FaCalendarAlt,
  FaDatabase,
  FaMoneyBillWave,
  FaBuilding,
  FaUsers,
  FaLifeRing,
  FaBell,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

function SPNavbar() {
  const navigate = useNavigate();

  return (
    <div className="sp-layout">

      {/* TOP NAVBAR */}
      <div className="sp-topbar">

        <div className="sp-logo">
          elderPA
        </div>

        <div className="sp-top-right">

          <FaBell className="top-icon" />

          <div className="signout">
            <FaSignOutAlt />
            <span>SIGN OUT</span>
          </div>

        </div>

      </div>

      {/* BODY */}
      <div className="sp-body">

        {/* SIDEBAR */}
        <div className="sp-sidebar">

          {/* HOME */}
          <div className="sidebar-item active">

            <div className="sidebar-left">
              <FaHome />
              <span>Home</span>
            </div>

          </div>

          {/* CARE REQUESTS */}
          <div className="sidebar-item">

            <div className="sidebar-left">
              <FaClipboardList />
              <span>Care Requests</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* SUBMENU */}
          <div className="submenu">

            <div
              className="submenu-item active-submenu"
              onClick={() => navigate("/new-requests")}
            >
              New Requests
            </div>

            <div className="submenu-item">
              Accepted Requests
            </div>

            <div className="submenu-item">
              Assessment Completed
            </div>

            <div className="submenu-item">
              Contract Pending
            </div>

          </div>

          {/* PACKAGES */}
          <div className="sidebar-item">

            <div className="sidebar-left">
              <FaClipboardList />
              <span>Packages & Services</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          <div className="submenu">

            <div className="submenu-item">
              Ongoing / Active
            </div>

            <div className="submenu-item">
              Completed
            </div>

            <div className="submenu-item">
              Cancelled
            </div>

          </div>

          {/* CHAT */}
          <div className="sidebar-item">

            <div className="sidebar-left">
              <FaComments />
              <span>Chat</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* SCHEDULE */}
          <div className="sidebar-item">

            <div className="sidebar-left">
              <FaCalendarAlt />
              <span>Schedule</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* PATIENT DATABASE */}
          <div className="sidebar-item">

            <div className="sidebar-left">
              <FaDatabase />
              <span>Patient Database</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* PAYMENTS */}
          <div className="sidebar-item">

            <div className="sidebar-left">
              <FaMoneyBillWave />
              <span>Payments</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* AGENCY PROFILE */}
          <div className="sidebar-item">

            <div className="sidebar-left">
              <FaBuilding />
              <span>Agency Profile</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* USERS */}
          <div className="sidebar-item">

            <div className="sidebar-left">
              <FaUsers />
              <span>Users</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

          {/* SUPPORT */}
          <div className="sidebar-item">

            <div className="sidebar-left">
              <FaLifeRing />
              <span>Support</span>
            </div>

            <FaChevronDown className="arrow" />

          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="sp-main-content">
        </div>

      </div>

    </div>
  );
}

export default SPNavbar;