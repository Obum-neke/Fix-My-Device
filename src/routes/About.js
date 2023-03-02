import React from 'react'
import "../components/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const About = () => {
  return (
    <div>
       <Navbar />

      <p className='intro'>An Online IT support and Service that Focuses on Nigeria's mobile device market and provides an efficient and reliable ecosystem of repair and maintenance of mobile devices for gadget owners without the fear of sub-standard service that tends to be offered by regular gadgets repairers.</p>
      <div className='values'> 
      <h3> Our Core Values </h3>
      <p>
        Efficiency|Responsiveness|Authenticity|Convenience|Transparency
      </p>
      </div>

      <div className='vision'>
        <h3>Our Vision</h3>
      <p>
        To be the Most Reliable Mobile Device maintenance and Repair Centre.
      </p>
      </div>

      <div className='mission'>
     <h3>Our Mission</h3>
      <p>
        To provide access to prompt, efficient, seamless and authentic repair service for our clients; using Original Equipment, Manufacturers and Skilled engineers.
      </p>
      </div>
      <Footer/>
      
    </div>
  )
}

export default About
