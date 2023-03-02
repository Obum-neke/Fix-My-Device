import React from 'react'
import "../components/support.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const contact = () => {
  return (
    <div>
      <Navbar/>
      <div>

        <h1>Frequently Asked Questions</h1>

        <div className='questions'>
        <div className='one'>
        Does Fixmydevice issue warranty on repaired devices?
        </div> 
        
      </div>
      <hr></hr>

      <div className='two'>
        What if my device is under warranty and I have lost the invoice?
      </div>
      <hr></hr>
      
      <div className='three'>
        How can you help if I am unable to identify the fault in my phone?
      </div>
      <hr></hr>

      <div className='four'>
        How long would it take to fix my device?
      </div>
      <hr></hr>

      <div className='five'>
        Does Fixmydevice repair devices with new phone parts?
      </div>
      <hr></hr>

      <div className='six'>
        Does Fixmydevice sell device parts or tools?
      </div>
      <hr></hr>

      <div className='seven'>
        Do you offer doorstep delivery?
      </div>
      <hr></hr>

      <div className='eight'>
        Is my device 100% safe in your custody?
      </div>
      <hr></hr>
      </div>

      <div>
        <h3 className='answer'>Can't find your answer?</h3>
        <p>If you have specific questions or request, visit our customer support.</p>
        <button className='btn'>Contact Us</button>
      </div>

      <Footer/>
      
    </div>
    
  )
}

export default contact
