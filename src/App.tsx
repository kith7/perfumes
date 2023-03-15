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
import PerfumesAgent from "./pages/Agent/PerfumesAgent";

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
          <Route path='perfumes/:id' element={<PerfumesAgent />} />

          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
