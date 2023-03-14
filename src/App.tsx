import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import TopNav from "./components/layout/TopNav";
import Perfumes from "./pages/Perfumes";
import PerfumeDetail from "./pages/PerfumeDetail";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/perfumes' element={<Perfumes />} />
        <Route path='/perfumes/:id' element={<PerfumeDetail />} />
      </Routes>
    </>
  );
}

export default App;
