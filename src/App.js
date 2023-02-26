import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Careers from "./routes/Careers"
import Support from "./routes/Support"

import { Route, Routes } from  "react-router-dom";
import RepairmyDevice from "./routes/RepairmyDevice";


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<About />} />
      <Route path="/" element={<Careers />} />
      <Route path="/" element={<Support />} />
      <Route path="/" element={<RepairmyDevice />} />
      </Routes> 
    </>
  );
}

export default App;
