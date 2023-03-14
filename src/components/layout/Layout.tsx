import React from "react";
import { Outlet } from "react-router-dom";
import TopnNav from "./TopNav";

const Layout = () => {
  return (
    <>
      <TopnNav />
      <Outlet />
    </>
  );
};

export default Layout;
