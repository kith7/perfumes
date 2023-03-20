import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Smell like a flowerbell</h1>
      <p>
        Add fragrance to your life by joining the bunch of people who know that
        smells matter. Buy perfect perfume to make your life more pleasurable
        and welcome
      </p>
      <Link to='/perfumes'>Find your smell</Link>
    </div>
  );
};

export default Home;
