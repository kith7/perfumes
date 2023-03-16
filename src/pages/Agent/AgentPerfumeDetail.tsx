import React from "react";
import { useParams } from "react-router-dom";
import { Iperfume } from "../../interfaces/Interfaces";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PerfumeDetailAgentLayout from "../../components/layout/PerfumeDetailAgentLayout";
const AgentPerfumeDetail = () => {
  const { id } = useParams();
  const [currentPerf, setCurrentPerf] = React.useState<Iperfume>();

  React.useEffect(() => {
    fetch(`/api/agent/perfumes/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentPerf(data.perfumes[0]));
  }, []);
  console.log(currentPerf);
  if (!currentPerf) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <NavLink to={`../perfumes`} className='back-button'>
        &larr; <span>Back to all perfumes</span>
      </NavLink>
      <div className='host-van-detail-layout-container'>
        <div className='host-van-detail'>
          <img src={currentPerf.images[1]} />
          <div className='hostc-van-detail-info-text'>
            <i className={`van-type van-type-${currentPerf.type}`}>
              {currentPerf.type}
            </i>
            <h3>{currentPerf.title}</h3>
            <h4>${currentPerf.price}/day</h4>
          </div>
        </div>
        <PerfumeDetailAgentLayout />
        <Outlet context={currentPerf} />
      </div>
    </section>
  );
};

export default AgentPerfumeDetail;
