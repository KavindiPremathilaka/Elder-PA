import Sidebar from "../../components/Sidebar/Sidebar";
import "./CareRequestList.css";

const CareRequestList = () => {
  return (
    <div className="request-layout">

      <Sidebar />

      <div className="request-content">

        <div className="request-header">

          <h1>Care Requests</h1>

        </div>

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Status</th>
              <th>Date</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>#1001</td>
              <td>John Doe</td>
              <td>Pending</td>
              <td>07/02/2026</td>
            </tr>

            <tr>
              <td>#1002</td>
              <td>Mary Jane</td>
              <td>Accepted</td>
              <td>07/03/2026</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default CareRequestList;