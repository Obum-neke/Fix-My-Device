import React from 'react'
import "../components/support.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const contact = () => {
  return (
    <div>
      <Navbar/>
      <div>
        
        Does Fixmydevice issue warranty on repaired devices? 
        
      </div>

      <span>
        What if my device is under warranty and I have lost the invoice?
      </span>
      
      <span>
        How can you help if I am unable to identify the fault in my phone?
      </span>

      <span>
        How long would it take to fix my device?
      </span>
      <span>
        Does Fixmydevice repair devices with new phone parts?
      </span>
      <span>
        Does Fixmydevice sell device parts or tools?
      </span>
      <span>
        Do you offer doorstep delivery?
      </span>
      <span>
        Is my device 100% safe in your custody?
      </span>

      <div>
        <h3>Can't find your answer?</h3>
        <p>If you have specific questions or request, visit our customer support.</p>
        <button>Contact Us</button>
      </div>

      <Footer/>
      
    </div>
    
  )
}

export default contact
