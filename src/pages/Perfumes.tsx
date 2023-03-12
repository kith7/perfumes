import React, { useEffect, useState } from "react";
import { Iperfumes } from "../interfaces/Interfaces";

const Perfumes = () => {
  const [perfumesData, setPerfumesData] = useState<Iperfumes>();
  useEffect(() => {
    const getData = async () => {
      const data = fetch("https://dummyjson.com/products/category/fragrances")
        .then((res) => res.json())
        .then((data) => {
          setPerfumesData(data.products);
          console.log(data.products);
        })
        .catch((err) => {
          console.error("Error", err);
        });
    };
    getData();
  }, []);

  return <div>Perfumes</div>;
};

export default Perfumes;
