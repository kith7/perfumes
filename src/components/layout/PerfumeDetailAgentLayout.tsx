import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
const PerfumeDetailAgentLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const { id } = useParams();

  return (
    <>
      <nav className='agent-nav'>
        <NavLink
          to={`/agent/perfumes/${id}`}
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
          end
        >
          Details
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

export default PerfumeDetailAgentLayout;
