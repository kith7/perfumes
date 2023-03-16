import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

import Perfumes from "./pages/Perfumes";
import PerfumeDetail from "./pages/PerfumeDetail";
import "./App.css";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Agent/Dashboard";
import Income from "./pages/Agent/Income";
import Reviews from "./pages/Agent/Reviews";
import AgentLayout from "./components/layout/AgentLayout";
import AgentPerfumeDetail from "./pages/Agent/AgentPerfumeDetail";
import PerfumesAgent from "./pages/Agent/PerfumesAgent";
import PerfumeDetailAgentLayout from "./components/layout/PerfumeDetailAgentLayout";

import DetailInfo from "./pages/Agent/AgentPerfume/DetailInfo";
import PhotosInfo from "./pages/Agent/AgentPerfume/PhotosInfo";
import PricingInfo from "./pages/Agent/AgentPerfume/PricingInfo";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/perfumes' element={<Perfumes />} />
        <Route path='/perfumes/:id' element={<PerfumeDetail />} />
        <Route path='/agent' element={<AgentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='perfumes' element={<PerfumesAgent />} />
          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='perfumes/:id' element={<AgentPerfumeDetail />}>
            <Route index element={<DetailInfo />} />
            <Route path='pricing' element={<PricingInfo />} />
            <Route path='photos' element={<PhotosInfo />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
