import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Iperfume } from "../interfaces/Interfaces";

const PerfumeDetail = () => {
  const params = useParams();

  const [perfumeData, setPerfumeData] = useState<Iperfume>();
  useEffect(() => {
    const getData = async () => {
      const data = fetch(`/api/perfumes/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setPerfumeData(data.perfume);
        })
        .catch((err) => {
          console.error("Error", err);
        });
    };
    getData();
  }, []);

  return (
    <div className='agent-detail-container'>
      {perfumeData ? (
        <div className='agent-detail'>
          <img src={perfumeData.images[1]} />
          <i className={`agent-type ${perfumeData.brand} selected`}>
            {perfumeData.brand}
          </i>
          <h2>{perfumeData.title}</h2>
          <p>{perfumeData.description}</p>
          <p className='agent-price'>
            <span>${perfumeData.price}</span> / flask
          </p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default PerfumeDetail;
