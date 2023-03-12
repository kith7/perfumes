import React from "react";
import bgImg from "../assets/images/about-hero.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className='about-page-container'>
      <img src={bgImg} className='about-hero-image' />
      <div className='about-page-content'>
        <h1>
          Don’t use any perfume when you can use the most natural perfume.
        </h1>
        <p>
          Our mission is to enliven your comfort among other smelly people.
          Don't be shy just try the topmost product there is in the market.
        </p>
        <p>
          Our team is full of perfume enthusiasts who know firsthand the magic
          of smelling nice.
        </p>
      </div>
      <div className='about-page-cta'>
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link className='link-button' to='/perfumes'>
          Explore our smells
        </Link>
      </div>
    </div>
  );
}
