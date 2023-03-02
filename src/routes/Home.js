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
import customerratings from"../assets/customerratings.png";
import easyscheduling from"../assets/easyscheduling.png";
import paymentoptions from"../assets/paymentoptions.png";
import updates from"../assets/updates.png";
import repairhistory from"../assets/repairhistory.png";


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
        <h2 className='what-we-do
        '>What we do</h2>
        <p>We help get the best of the best engineers to fix up your damaged devices anyday, anytime</p>
      </div>

       <div>
         <img src={phoneiphone} alt=""  />
         <h4>Iphone Repair</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
         
         <img src={phoneandroid} alt="" />
         <h4>Android Repair</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
         <img src={repairscreens} alt="" />
         <h4>Tablet Repair</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
         <img src={laptop2} alt="" />
         <h4>Laptop Repair</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
         <img src={gamepad} alt="" />
        <h4> Game Console Repair</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
         <img src={others2} alt="" />
        <h4>Others</h4>
         <p></p>
         
      </div>

      <section>
        <h2>How Fix My Device Works For You</h2>
        <img src={ easyscheduling } alt="" />
        <h4>Easy Scheduling</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>
         <img src={ updates } alt="" />
         <h4>Real Time Updates</h4>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         </p>
         <img src={ paymentoptions } alt="" />
         <h4>Payment Options</h4>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         </p>

         <img src={ customerratings } alt="" />
         <h4>Customer Ratings</h4>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         </p>
         <img src={ repairhistory } alt="" />
         <h4>Track Repair History</h4>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         </p>

      </section>

      <section>
        <h3 className='feedback-header'>Customer Feedback and Reviews</h3>
        <p className='customers-say'>
          Here's what our wonderful customers have to say
        </p>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

      </section>

      <Footer/>

       </div>

       
       

       
  );
  
}

export default Home;
