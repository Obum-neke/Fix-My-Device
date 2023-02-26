import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Careers from "./routes/Careers"
import Support from "./routes/Support"
import RepairmyDevice from "./routes/RepairmyDevice";



import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";


function App() {
  return (
    <> 
    <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Careers />} />
      <Route path="/support" element={<Support />} />
      <Route path="/repairmydevice" element={<RepairmyDevice />} />
      </Routes> 
      </Router>
    </>
  );
}

export default App;
