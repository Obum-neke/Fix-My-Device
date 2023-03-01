import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom";

import logo from "../assets/logo.png"
import Twitter from "../assets/Twitter.png"
import Instagram from "../assets/Instagram.png"
import Facebook from "../assets/Facebook.png"
import LinkedIn from "../assets/LinkedIn.png"
import Download from "../assets/Download.png"
import Downloadgoogle from "../assets/Downloadgoogle.png"



const footer = () => {
  return (
    <div>
    
        <footer> 
          <img src={logo} alt="" />
        <h1>Fixmydevice</h1>
        <p>Didn't you know you had that much power? <b />
        You can do anything! In life, you need colors</p>

        <div>
          <h3>Follow Us</h3>
          <div>
          <img src={Instagram} alt="" />
        <img src={Twitter} alt="" />
        <img src={Facebook} alt="" />
        <img src={LinkedIn} alt="" />
          </div>
        
        </div>
      
      <div>
        <h3>Know Fixmydevice</h3>
        <div>
        <Link to='/about'>About Us </Link> <br /> 
        <Link to='/careers'>Careers </Link> <br />
        <Link to='/about'>Privacy Policy</Link> <br />
        <Link to='/support'>FAQ'S</Link>        
       <Link to='/'>Terms and Conditions</Link>
        </div>
      </div>

      <div>
        <h3>Contact Us</h3>
        <span>
        <Link to='/support'>Help Center </Link> <br />
        <Link to='/careers'>Become a Vendor</Link> <br />
        <Link to='/support'>How to make a report</Link>  
        </span>
      </div>

      
      <img src={Download} alt="" />
        <img src={Downloadgoogle} alt="" /></footer> 
      
    </div>
  )
}

export default footer
