import React from 'react'
import "../index.css";
import "../assets/phoneiphone.png";
import "../assets/phoneandroid.png";
import "../assets/repairscreens.png";
import "../assets/laptop2.png";
import "../assets/gamepad.png";
import "../assets/others2.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return ( 
    <div>
      <section className='section1'>
      <Navbar />

      <div className='content'>

        <h1>Welcome to Fix my Device</h1>
      <p>We're here to help you get your device up and running again as quickly as possible</p>

      </div>

      </section>
      <div>
        <h2>What we do</h2>
        <p>We help get the best of the best engineers to fix up your damaged devices anyday, anytime</p>
      </div>

      {/* <div>
        <img src={phoneiphone} alt="" />
        <img src={phoneandroid} alt="" />
        <img src={repairscreens} alt="" />
        <img src={laptop2} alt="" />
        <img src={gamepad} alt="" />
        <img src={others2} alt="" />
        
      </div> */}

      <section>

      </section>

       </div>

       
       

       
  );
  
}

export default Home;
