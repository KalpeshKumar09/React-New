import React from "react";

import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = ({ element }) => {
  const auth = useAuth();
  return auth ? <element /> : <Navigate to="/Login" />;
};

export default ProtectedRoute;
