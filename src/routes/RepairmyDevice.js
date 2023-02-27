import React from 'react'
import "../index.css";
import Navbar from "../components/Navbar";
import iphone from "../assets/iphone.png"
import android from "../assets/android.png"
import tablet from "../assets/tablet.png"
import laptop from "../assets/laptop.png"
import gamepad from "../assets/game.png"
import others from "../assets/others.png"


const RepairmyDevice = () => {
  return (
    <div>
     <Navbar />
     <h1>Please Select Your Device</h1> 
     <div>
     <img src={iphone} alt="" />
        <img src={android} alt="" />
        <img src={tablet} alt="" />
        <img src={laptop} alt="" />
        <img src={gamepad} alt="" />
        <img src={others} alt="" />
     </div>
    </div>

  )
}

export default RepairmyDevice
