import React, { useEffect, useState, useMemo } from "react";
import { Iperfume } from "../interfaces/Interfaces";
import PerfumeCard from "../components/PerfumeCard";
import { useSearchParams } from "react-router-dom";
import { getPerfumes } from "../api/api.js";
const Perfumes = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [loading, setLoading] = React.useState(false);
  const [perfumesData, setPerfumesData] = useState<Iperfume[]>([]);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await getPerfumes();
        setPerfumesData(data);
        setLoading(false);
      } catch (error) {
        setError(error:any);
      } finally {
        setLoading(false);
      }
      // fetch("/api/perfumes")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setPerfumesData(data.perfumes);
      //     console.log(data.perfumes);
      //   })
      //   .catch((err) => {
      //     console.error("Error", err);
      //   });
    };
    getData();
  }, []);
  const filteredPerfumesData = typeFilter
    ? perfumesData.filter((el) => el.type === typeFilter)
    : perfumesData;
  const perfumesCards = useMemo(
    () =>
      filteredPerfumesData.map((perfumeEl) => {
        return <PerfumeCard perfume={perfumeEl} key={perfumeEl.id} />;
      }),
    [filteredPerfumesData]
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className='perfume-list-container'>
      <h1>Explore our scents</h1>
      <div className='perfume-list-filter-buttons'>
        <button
          onClick={() => setSearchParams({ type: "flowery" })}
          className={`perfume-type flowery ${
            typeFilter === "flowery" ? "selected" : ""
          }`}
        >
          Flowery
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`perfume-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "cologne" })}
          className={`perfume-type cologne ${
            typeFilter === "cologne" ? "selected" : ""
          }`}
        >
          cologne
        </button>
        <button
          onClick={() => setSearchParams({ type: "" })}
          className='perfume-type clear-filters'
        >
          Clear filter
        </button>
      </div>
      <div className='perfume-list'>
        {perfumesCards ? perfumesCards : <h2>Loading...</h2>}
      </div>
    </div>
  );
};

export default Perfumes;
