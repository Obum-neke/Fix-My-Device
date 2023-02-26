import "./Navbarstyles.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa"


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to="/">
            <h1>FixmyDevice</h1>
        </Link>
        <ul className={click ? "nav-menu.active" : "nav-menu"}>
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

         <div className="hamburger" onClick= {handleClick}>
            {click ? (
                <FaTimes size ={20} style={{ color: "black" }} />
            ) : (
            <FaBars size={20} style={{color: "black"}} />
            )}

        </div> 
      
    </div>
  )
}

export default Navbar;
