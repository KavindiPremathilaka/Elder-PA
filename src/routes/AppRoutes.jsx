import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import SignIn from "../pages/SignIn/SignIn";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/signin"
          element={<SignIn />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;