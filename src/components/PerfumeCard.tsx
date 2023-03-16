import React, { memo } from "react";
import { Iperfume } from "../interfaces/Interfaces";
import { Link } from "react-router-dom";
type CardProps = {
  perfume: Iperfume;
};

const PerfumeCard = ({ perfume }: CardProps) => {
  return (
    <div key={perfume.id} className='perfume-tile'>
      <Link to={`/perfumes/${perfume.id}`}>
        <img src={perfume.images[1]} />
        <div className='perfume-info'>
          <h3>{perfume.brand}</h3>
          <i className={`perfume-type ${perfume.type} selected`}>
            {perfume.type}
          </i>
          <p>
            ${perfume.price}
            <span>/flask</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default memo(PerfumeCard);
