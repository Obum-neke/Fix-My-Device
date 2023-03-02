import React from 'react'
import "../components/repair.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import appleiphone from "../assets/appleiphone.png"
import android from "../assets/android.png"
import tablet from "../assets/tablet.png"
import laptop from "../assets/laptop.png"
import gamepad from "../assets/game.png"
import others from "../assets/others.png"
import { Link } from "react-router-dom";



const RepairmyDevice = () => {
  return (
    <div>
     <Navbar />
     <h1>Please Select Your Device</h1> 
     <div>
       <Link to="./Iphonemodels"> <img src={appleiphone} alt="" /> </Link>
        <img src={android} alt="" />
        <img src={tablet} alt="" />
        <img src={laptop} alt="" />
        <img src={gamepad} alt="" />
        <img src={others} alt="" />
     </div>

     
     <Footer/>
     
    </div>
    

  )
}

export default RepairmyDevice
