import React from "react";
import { Link } from "react-router-dom";
import { Iperfume } from "../../interfaces/Interfaces";

const PerfumesAgent = () => {
  const [perfumes, setPerfumes] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/agent/perfumes")
      .then((res) => res.json())
      .then((data) => setPerfumes(data.perfumes));
  }, []);

  const agentPerfumesEls = perfumes.map((perfume: Iperfume) => (
    <Link
      to={`/agent/perfumes/${perfume.id}`}
      key={perfume.id}
      className='agent-perfume-link-wrapper'
    >
      <div className='agent-perfume-single' key={perfume.id}>
        <img src={perfume.images[1]} alt={`Photo of ${perfume.title}`} />
        <div className='agent-perfume-info'>
          <h3>{perfume.brand}</h3>
          <p>${perfume.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className='agent-perfume-title'>Your listed perfumes</h1>
      <div className='agent-perfume-list'>
        {agentPerfumesEls.length > 0 ? (
          <section>{agentPerfumesEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default PerfumesAgent;
