import React from "react";
import { Link } from "react-router-dom";

const TopnNav = () => {
  return (
    <>
      <Link className='site-logo' to='/'>
        #Perfume
      </Link>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/perfumes'>Perfumes</Link>
      </nav>
    </>
  );
};

export default TopnNav;
