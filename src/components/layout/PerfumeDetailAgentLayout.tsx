import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const PerfumeDetailAgentLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className='host-van-detail-nav'>
        <NavLink
          to={`.`}
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
          end
        >
          Details
        </NavLink>
        <NavLink
          to='pricing'
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Pricing
        </NavLink>
        <NavLink
          to='photos'
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Photos
        </NavLink>
      </nav>
    </>
  );
};

export default PerfumeDetailAgentLayout;
