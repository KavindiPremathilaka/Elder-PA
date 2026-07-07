import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        elderPA
      </div>

      <ul>

        <li className="active">Home</li>

        <li>Care Requests</li>

        <li>New Requests</li>

        <li>Accepted Requests</li>

        <li>Assessment Completed</li>

        <li>Payments</li>

        <li>Users</li>

        <li>Support</li>

      </ul>

    </div>
  );
};

export default Sidebar;