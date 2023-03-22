import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const isLoggedIn = localStorage.getItem("loggedin");
  const location = useLocation();
  if (!isLoggedIn) {
    return (
      <Navigate
        to='login'
        replace
        state={{
          message: "You must log in first.",
          from: location.pathname,
        }}
      />
    );
  }
  return <Outlet />;
};

export default AuthRequired;
