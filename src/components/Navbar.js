import "./Navbarstyles.css"
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
        <Link to="/">
            <h1>FixmyDevice</h1>
        </Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Repair my Device</Link>
            </li>
            <li>
                <Link to="/">About Us</Link>
            </li>
            <li>
                <Link to="/">Support</Link>
            </li>
            <li>
                <Link to="/">Careers</Link>
            </li>
        </ul>
      
    </div>
  );
};

export default Navbar;
