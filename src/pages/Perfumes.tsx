import React, { useEffect, useState, useMemo } from "react";
import { Iperfume } from "../interfaces/Interfaces";
import PerfumeCard from "../components/PerfumeCard";
import { useSearchParams, useLoaderData } from "react-router-dom";
import { getPerfumes } from "../api/api.js";

export async function loader() {
  return await getPerfumes();
}
const Perfumes = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [loading, setLoading] = React.useState(false);
  // const [perfumesData, setPerfumesData] = useState<Iperfume[]>([]);
  // const [error, setError] = React.useState<Error | any>();
  const perfumesData: Iperfume[] | any = useLoaderData();
  const filteredPerfumesData = typeFilter
    ? perfumesData.filter((el: Iperfume) => el.type === typeFilter)
    : perfumesData;
  const perfumesCards = useMemo(
    () =>
      filteredPerfumesData.map((perfumeEl: Iperfume) => {
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
