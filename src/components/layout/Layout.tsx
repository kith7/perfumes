import React from "react";
import { Outlet } from "react-router-dom";
import TopnNav from "./TopNav";

const Layout = () => {
  return (
    <>
      <TopnNav />
      <Outlet />
      <footer>&#169; 2023 #PERFUMES</footer>
    </>
  );
};

export default Layout;
