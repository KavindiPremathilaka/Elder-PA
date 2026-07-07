import "./AdminNavbar.css";

import {
  FaBell,
  FaSignOutAlt,
  FaHome,
  FaClipboardList,
  FaComments,
  FaMoneyBillWave,
  FaCog,
  FaLifeRing,
  FaChevronDown,
  FaUsers,
} from "react-icons/fa";

function AdminNavbar() {
  return (
    <div className="admin-navbar-layout">

      {/* TOPBAR */}
      <div className="admin-navbar-topbar">

        <div className="admin-navbar-logo">
          elderPA
        </div>

        <div className="admin-navbar-right">

          <FaBell className="topbar-icon" />

          <div className="admin-signout">
            <FaSignOutAlt />
            <span>SIGN OUT</span>
          </div>

        </div>

      </div>

      {/* BODY */}
      <div className="admin-navbar-body">

        {/* SIDEBAR */}
        <div className="admin-sidebar">

          {/* HOME */}
          <div className="admin-menu-item active-admin-menu">

            <div className="admin-menu-left">
              <FaHome />
              <span>Home</span>
            </div>

          </div>

          {/* CARE REQUESTS */}
          <div className="admin-menu-item">

            <div className="admin-menu-left">
              <FaClipboardList />
              <span>Care Requests</span>
            </div>

            <FaChevronDown className="admin-arrow" />

          </div>

          <div className="admin-submenu">

            <div>Create New Request</div>

            <div>Pending</div>

            <div>Awaiting Match</div>

            <div>Provider Assigned</div>

            <div>Accepted Requests</div>

            <div>Assessment Completed</div>

            <div>Contract Pending</div>

          </div>

          {/* PACKAGES */}
          <div className="admin-menu-item">

            <div className="admin-menu-left">
              <FaClipboardList />
              <span>C. Packages & Services</span>
            </div>

            <FaChevronDown className="admin-arrow" />

          </div>

          <div className="admin-submenu">

            <div>Ongoing / Active</div>

            <div>Completed</div>

            <div>Cancelled</div>

          </div>

          {/* CHAT */}
          <div className="admin-menu-item">

            <div className="admin-menu-left">
              <FaComments />
              <span>Chat</span>
            </div>

            <FaChevronDown className="admin-arrow" />

          </div>

          {/* MANAGE CUSTOMERS */}
          <div className="admin-menu-item">

            <div className="admin-menu-left">
              <FaUsers />
              <span>Manage Customers</span>
            </div>

            <FaChevronDown className="admin-arrow" />

          </div>

          {/* MANAGE PROVIDERS */}
          <div className="admin-menu-item">

            <div className="admin-menu-left">
              <FaUsers />
              <span>Manage Providers</span>
            </div>

            <FaChevronDown className="admin-arrow" />

          </div>

          {/* MANAGE CATEGORIES */}
          <div className="admin-menu-item">

            <div className="admin-menu-left">
              <FaClipboardList />
              <span>Manage Categories</span>
            </div>

            <FaChevronDown className="admin-arrow" />

          </div>

          {/* PAYMENTS */}
          <div className="admin-menu-item">

            <div className="admin-menu-left">
              <FaMoneyBillWave />
              <span>Payments</span>
            </div>

            <FaChevronDown className="admin-arrow" />

          </div>

          {/* SETTINGS */}
          <div className="admin-menu-item">

            <div className="admin-menu-left">
              <FaCog />
              <span>Settings</span>
            </div>

            <FaChevronDown className="admin-arrow" />

          </div>

          {/* SUPPORT */}
          <div className="admin-menu-item">

            <div className="admin-menu-left">
              <FaLifeRing />
              <span>Support</span>
            </div>

            <FaChevronDown className="admin-arrow" />

          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="admin-main-content">
        </div>

      </div>

    </div>
  );
}

export default AdminNavbar;