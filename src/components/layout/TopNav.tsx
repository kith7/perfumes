import React from "react";
import { NavLink, Link } from "react-router-dom";

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
        <Link to='login' className='login-link'>
          <img src='/assets/images/avatar-icon.png' className='login-icon' />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
};

export default TopnNav;
