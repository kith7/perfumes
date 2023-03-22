import React from "react";
import { useOutletContext } from "react-router-dom";
import { Iperfume } from "../../../interfaces/Interfaces";
const DetailInfo = () => {
  const { description, brand, type, title }: Iperfume = useOutletContext();
  console.log(useOutletContext());
  return (
    <section className='agent-perfume-detail-info'>
      <h4>
        Brand: <span>{brand}</span>
      </h4>
      <h4>
        Category: <span>{type}</span>
      </h4>
      <h4>
        Description: <span>{description}</span>
      </h4>
      <h4>
        Name: <span>{title}</span>
      </h4>
    </section>
  );
};

export default DetailInfo;
