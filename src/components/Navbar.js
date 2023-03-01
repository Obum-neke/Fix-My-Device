import "./Navbarstyles.css"
import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"




const Navbar = () => {

    
  return (
    <div className="header">
        
        <NavLink to="/">
        <img src={logo} alt="" />
            <h1 className="theh1">FixmyDevice</h1>
        </NavLink>
        <ul className="nav-menu">
            <li>
                
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/repairmydevice">Repair my Device</NavLink>
            </li>

            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            
            <li>
                <NavLink to="/support">Support</NavLink>
            </li>
            <li>
                <NavLink to="/careers">Careers</NavLink>
            </li>
        </ul>

         
      
    </div>
  )
}

export default Navbar;
