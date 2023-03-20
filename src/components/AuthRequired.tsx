import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthRequired = () => {
  const auth = { token: null };
  if (!auth.token) {
    return <Navigate to='login' state={{ message: "Please login first" }} />;
  }
  return <Outlet />;
};

export default AuthRequired;
