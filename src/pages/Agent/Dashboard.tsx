import React from "react";
import { Link, defer, Await, useLoaderData } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getAgentPerfumes } from "../../api/api";
import { Iperfume } from "../../interfaces/Interfaces";
export function loader() {
  return defer({ perfumes: getAgentPerfumes() });
}

export default function Dashboard() {
  const loaderData = useLoaderData();

  function renderperfumeElements(perfumes: Array<Iperfume>) {
    const agentPerfumes = perfumes.map((perfume) => (
      <div className='agent-perfume-single' key={perfume.id}>
        <img src={perfume.thumbnail} alt={`Photo of ${perfume.brand}`} />
        <div className='agent-perfume-info'>
          <h3>{perfume.brand}</h3>
          <p>${perfume.price}/day</p>
        </div>
        <Link to={`perfumes/${perfume.id}`}>View</Link>
      </div>
    ));

    return (
      <div className='agent-perfumes-list'>
        <section>{agentPerfumes}</section>
      </div>
    );
  }

  return (
    <>
      <section className='agent-dashboard-earnings'>
        <div className='info'>
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to='income'>Details</Link>
      </section>
      <section className='agent-dashboard-reviews'>
        <h2>Review score</h2>

        <BsStarFill className='star' />

        <p>
          <span>5.0</span>/5
        </p>
        <Link to='reviews'>Details</Link>
      </section>
    </>
  );
}
