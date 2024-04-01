import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Home from "../Pages/Home/Home";
import ProtectedRoute from '../Routes/ProtectedRoute'
import Booking from "../Pages/Booking/Booking";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import Navbar from "../components/Navbar/Navbar";
import AddBooking from "../Pages/Booking/AddBooking";
import BookingList from "../Pages/Booking/BookingList";



const MainRoute = () => {
  return (
    <>
      <UserAuthContextProvider>
         <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/Home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="Booking" element={<ProtectedRoute>
              <Booking/>
            </ProtectedRoute>}/>
            <Route path="AddBooking" element={<ProtectedRoute>
              <AddBooking/>
            </ProtectedRoute>}/>
            <Route path="BookingList" element={<ProtectedRoute>
              <BookingList/>
            </ProtectedRoute>}/>
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Router> 
       
      </UserAuthContextProvider>
    </>
  );
};

export default MainRoute;
