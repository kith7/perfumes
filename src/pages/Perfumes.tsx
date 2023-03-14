import React, { useEffect, useState, useMemo } from "react";
import { Iperfume } from "../interfaces/Interfaces";
import PerfumeCard from "../components/PerfumeCard";

const Perfumes = () => {
  const [perfumesData, setPerfumesData] = useState<Iperfume[]>([]);
  useEffect(() => {
    const getData = async () => {
      fetch("/api/perfumes")
        .then((res) => res.json())
        .then((data) => {
          setPerfumesData(data.perfumes);
          console.log(data.perfumes);
        })
        .catch((err) => {
          console.error("Error", err);
        });
    };
    getData();
  }, []);

  const perfumesCards = useMemo(
    () =>
      perfumesData.map((perfumeEl) => {
        return <PerfumeCard perfume={perfumeEl} key={perfumeEl.id} />;
      }),
    [perfumesData]
  );
  return (
    <div className='perfume-list-container'>
      <h1>Explore our scents</h1>
      <div className='perfume-list'>
        {perfumesCards ? perfumesCards : <h2>Loading...</h2>}
      </div>
    </div>
  );
};

export default Perfumes;
