import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

import Perfumes from "./pages/Perfumes";
import PerfumeDetail from "./pages/PerfumeDetail";
import "./App.css";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Route element={<Layout />}>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/perfumes' element={<Perfumes />} />
          <Route path='/perfumes/:id' element={<PerfumeDetail />} />
        </Route>
      </Route>
    </>
  );
}

export default App;
