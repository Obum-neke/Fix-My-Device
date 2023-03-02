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
        <h1 className='headlogo
        '>Fixmydevice</h1>
        <p className='first-row'>Didn't you know you had that much power? <b />
        You can do anything! In life, you need colors</p>

        <div className='socialmedia'>
          <h3>Follow Us</h3>
          <div>
          <p><img src={Instagram} alt="" /></p>
          <p><img src={Twitter} alt="" /></p>
          <p><img src={Facebook} alt="" /></p>
          <p><img src={LinkedIn} alt="" /></p>
          </div>
        
        </div>
      
      <div className='know-links'>
        <h3>Know Fixmydevice</h3>
        <div>
        <Link to='/about'>About Us </Link> <br /> 
        <Link to='/careers'>Careers </Link> <br />
        <Link to='/about'>Privacy Policy</Link> <br />
        <Link to='/support'>FAQ'S</Link> <br/>       
       <Link to='/about'>Terms and Conditions</Link>
        </div>
      </div>

      <div className='contact-links'>
        <h3>Contact Us</h3>
        <div>
        <Link to='/support'>Help Center </Link> <br />
        <Link to='/careers'>Become a Vendor</Link> <br />
        <Link to='/support'>How to make a report</Link>  
        </div>
      </div>

      
      <img src={Download} alt="" />
        <img src={Downloadgoogle} alt="" /></footer> 
      
    </div>
  )
}

export default footer
