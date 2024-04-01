import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Home from "../Pages/Home/Home";
import ProtectedRoute from '../Routes/ProtectedRoute'
import { UserAuthContextProvider } from "../context/UserAuthContext";


const MainRoute = () => {
  return (
    <>
      <UserAuthContextProvider>
         <Router>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route
              path="/Home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Router> 
       
      </UserAuthContextProvider>
    </>
  );
};

export default MainRoute;
