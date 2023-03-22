import React from "react";
import { useOutletContext } from "react-router-dom";
import { Iperfume } from "../../../interfaces/Interfaces";
const PricingInfo = () => {
  const { price }: Iperfume = useOutletContext();
  return <h3 className='agent-perfume-price'>${price}</h3>;
};

export default PricingInfo;
