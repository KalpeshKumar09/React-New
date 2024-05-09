import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import Login from "../components/Login/Login";
import Home from "../Pages/Home/Home";
import ProtectedRoute from "../Routes/ProtectedRoute";
import OtpSignIn from "../components/OtpSignIn/OtpSignIn";
import Otp from "../components/OtpSignIn/Otp";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import Contact from "../Pages/Contact/Contact";
import Report from "../Pages/Report/Report";
import Privacy from "../Pages/Additional/Privacy";
import Terms from "../Pages/Additional/Terms";
import AddProfile from "../Pages/Profile/AddProfile";
import Profile from "../Pages/Profile/Profile";
import Setting from "../Pages/Setting/Setting";
import Navbar from "../components/Navbar/Navbar";

const MainRoute = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Router>
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/OtpSignIn" element={<OtpSignIn />} />
            <Route path="/Otp" element={<Otp />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/AddProfile" element={<AddProfile />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Setting" element={<Setting />} />
            <Route
              path="/Privacy"
              element={
                <ProtectedRoute>
                  <Privacy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Terms"
              element={
                <ProtectedRoute>
                  <Terms />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="Booking"
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              }
            /> */}
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </>
  );
};

export default MainRoute;
