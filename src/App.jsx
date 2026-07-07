import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/SignIn/SignIn";

import Registration from "./pages/Registration/Registration";
import RegistrationStep2 from "./pages/Registration/RegistrationStep2";
import RegistrationStep3 from "./pages/Registration/RegistrationStep3";
import RegistrationStep4 from "./pages/Registration/RegistrationStep4";
import RegistrationFinal from "./pages/Registration/RegistrationFinal";

import Dashboard from "./pages/Dashboard/Dashboard";

import SPNavbar from "./components/SPNavbar/SPNavbar";
import NewRequestsPage from "./components/SPNavbar/NewRequestsPage";
import CareRequestDetails from "./components/SPNavbar/CareRequestDetails";

import AdminSignIn from "./pages/AdminSignIn/AdminSignIn";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import AdminCreateCR from "./pages/AdminCreateCR/AdminCreateCR";
import AdminAssignRequest from "./pages/AdminAssignRequest/AdminAssignRequest";

function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/signin" element={<SignIn />} />

      <Route path="/register" element={<Registration />} />

      <Route
        path="/register/step2"
        element={<RegistrationStep2 />}
      />

      <Route
        path="/register/step3"
        element={<RegistrationStep3 />}
      />

      <Route
        path="/register/step4"
        element={<RegistrationStep4 />}
      />

      <Route
        path="/register/final"
        element={<RegistrationFinal />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/sp-navbar"
        element={<SPNavbar />}
      />

      <Route
        path="/new-requests"
        element={<NewRequestsPage />}
      />

      <Route
        path="/care-request-details"
        element={<CareRequestDetails />}
      />

      <Route
        path="/admin-signin"
        element={<AdminSignIn />}
      />

      <Route
        path="/admin-navbar"
        element={<AdminNavbar />}
      />

      <Route
        path="/admin-create-cr"
        element={<AdminCreateCR />}
      />

      <Route
        path="/admin-assign-request"
        element={<AdminAssignRequest />}
      />


    </Routes>
  );
}

export default App;