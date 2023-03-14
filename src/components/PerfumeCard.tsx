import React, { memo } from "react";
import { Iperfume } from "../interfaces/Interfaces";
import { Link, useParams } from "react-router-dom";
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
          <p>
            ${perfume.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`perfume-type ${perfume.title} selected`}>
          {perfume.title}
        </i>
      </Link>
    </div>
  );
};

export default memo(PerfumeCard);
