import React from "react";
import { useParams } from "react-router-dom";
const AgentPerfumeDetail = () => {
  const { id } = useParams();
  const [currentPerf, setCurrentPerf] = React.useState({});

  React.useEffect(() => {
    fetch(`/api/agent/perfumes/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentPerf(data.perfumes[0]));
  }, []);
  console.log(currentPerf);
  return <div>AgentPerfumeDetail</div>;
};

export default AgentPerfumeDetail;
