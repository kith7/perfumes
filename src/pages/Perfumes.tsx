import React, { Suspense } from "react";
import { Iperfume } from "../interfaces/Interfaces";
import PerfumeCard from "../components/PerfumeCard";
import {
  useSearchParams,
  useLoaderData,
  defer,
  Await,
  Link,
} from "react-router-dom";
import { getPerfumes } from "../api/api.js";

export function loader() {
  return defer({ perfumes: getPerfumes() });
}

const Perfumes = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const dataPromise: Iperfume[] | any = useLoaderData();

  const typeFilter = searchParams.get("type");

  function renderPerfumeElements(perfumes: Array<Iperfume>) {
    const filteredPerfumesData = typeFilter
      ? perfumes.filter((el: Iperfume) => el.type === typeFilter)
      : perfumes;

    const perfumeCardEls = filteredPerfumesData.map((perfume: Iperfume) => {
      return <PerfumeCard perfume={perfume} key={perfume.id} />;
    });

    return (
      <>
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
        <div className='perfume-list'>{perfumeCardEls}</div>
      </>
    );
  }
  return (
    <div className='perfume-list-container'>
      <h1>Explore our scents</h1>
      <Suspense fallback={<h3>Loading perfumes...</h3>}>
        <Await resolve={dataPromise.perfumes}>{renderPerfumeElements}</Await>
      </Suspense>
    </div>
  );
};

export default Perfumes;
