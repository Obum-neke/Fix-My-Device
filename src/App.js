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
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/career" element={<Careers />} />
      <Route exact path="/support" element={<Support />} />
      <Route exact path="/repairmydevice" element={<RepairmyDevice />} />
      </Routes> 
      </Router>
    </>
  );
 
}

export default App;
