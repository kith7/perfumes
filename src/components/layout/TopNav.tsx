import React from "react";
import { NavLink } from "react-router-dom";

const TopnNav = () => {
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <header>
      <NavLink className='site-logo' to='/'>
        #Perfume
      </NavLink>
      <nav>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          About
        </NavLink>
        <NavLink
          to='/perfumes'
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          Perfumes
        </NavLink>
        <NavLink
          to='/agent'
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          Agent
        </NavLink>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
};

export default TopnNav;
