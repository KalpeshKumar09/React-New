import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Home from "../Pages/Home/Home";
import ProtectedRoute from "../Routes/ProtectedRoute";
// import Booking from "../Pages/Booking/Booking";
// import Navbar from "../components/Navbar/Navbar";
// import AddBooking from "../Pages/Booking/AddBooking";
// import BookingList from "../Pages/Booking/BookingList";
// import Profile from "../Pages/Profile/Profile";
import OtpSignIn from "../components/OtpSignIn/OtpSignIn";
import Otp from "../components/OtpSignIn/Otp";

const MainRoute = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="OtpSignIn" element={<OtpSignIn />} />
            <Route path="Otp" element={<Otp />} />
            <Route
              path="/Home"
              element={
                <ProtectedRoute>
                  <Home />
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

            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </>
  );
};

export default MainRoute;
