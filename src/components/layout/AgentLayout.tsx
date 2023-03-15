import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const AgentLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className='agent-nav'>
        <NavLink
          to='/agent'
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to='/agent/income'
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Income
        </NavLink>
        <NavLink
          to='/agent/reviews'
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Reviews
        </NavLink>
        <NavLink
          to='/agent/perfumes'
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Perfumes
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default AgentLayout;
