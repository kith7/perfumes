import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import TopNav from "./components/layout/TopNav";
import Perfumes from "./pages/Perfumes";
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
      </Routes>
    </>
  );
}

export default App;
