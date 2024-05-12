import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../Pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import BNav from "../components/BNavbar/BNav";
import ChangePassword from "../components/ForgotPassword/ChangePassword";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import VerifyEmail from "../components/ForgotPassword/VerifyEmail";
import UpdatedPassword from "../components/ForgotPassword/UpdatedPassword";
import VerifyOtp from "../components/ForgotPassword/VerifyOtp";
import Otp from "../components/OtpSignIn/Otp";
import OtpSignIn from "../components/OtpSignIn/OtpSignIn";
import Privacy from "../Pages/Additional/Privacy";
import Terms from "../Pages/Additional/Terms";
import Booking from "../Pages/Booking/Booking";
import BookingDetails from "../Pages/Booking/BookingDetails";
import BookingOtp from "../Pages/Booking/BookingOtp";
import Contact from "../Pages/Contact/Contact";
import AddProfile from "../Pages/Profile/AddProfile";
import Profile from "../Pages/Profile/Profile";
import Report from "../Pages/Report/Report";
import Setting from "../Pages/Setting/Setting";
import Wallet from "../Pages/Wallet/Wallet";
import WalletDrawFund from "../Pages/Wallet/WithDrawFunds";
import WalletDrawFundScreen from "../Pages/Wallet/WithDrawFundsScreen";

const MainRoute = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/UpdatedPassword" element={<UpdatedPassword />} />
          <Route path="/VerifyEmail" element={<VerifyEmail />} />
          <Route path="/VerifyOtp" element={<VerifyOtp />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/OtpSignIn" element={<OtpSignIn />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/BookingDetails" element={<BookingDetails />} />
          <Route path="/BookingOtp" element={<BookingOtp />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AddProfile" element={<AddProfile />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/WalletDrawFund" element={<WalletDrawFund />} />
          <Route
            path="/WalletDrawFundScreen"
            element={<WalletDrawFundScreen />}
          />
        </Routes>
        <BNav />
      </Router>
    </>
  );
};

export default MainRoute;
