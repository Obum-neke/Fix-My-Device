import React from 'react'
import "../index.css";
import phoneiphone from "../assets/phoneiphone.png";
import phoneandroid from "../assets/phoneandroid.png";
import repairscreens from "../assets/repairscreens.png";
import laptop2 from"../assets/laptop2.png";
import gamepad from"../assets/gamepad.png";
import others2 from  "../assets/others2.png";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Home = () => {
  return ( 
    <div>
      <section className='section1'>
      <Navbar />

      <div className='content'>

        <div className='homeHeader'>
        <h1>Welcome to Fix my Device</h1>
      <p>We're here to help you get your device up and running again as quickly as possible</p>
      </div>
      </div>

      </section>
      <div>
        <h2>What we do</h2>
        <p>We help get the best of the best engineers to fix up your damaged devices anyday, anytime</p>
      </div>

       <div>
         <img src={phoneiphone} alt="" />
         <img src={phoneandroid} alt="" />
         <img src={repairscreens} alt="" />
         <img src={laptop2} alt="" />
         <img src={gamepad} alt="" />
         <img src={others2} alt="" />
         
      </div>

      <section>
        <h2>How Fix My Device Works For You</h2>
      </section>

      <section>
        <h3>Customer Feedback and Reviews</h3>
        <p>
          Here's what our wonderful customers have to say
        </p>
        
      </section>

      <Footer/>

       </div>

       
       

       
  );
  
}

export default Home;
