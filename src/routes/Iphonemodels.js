import React from 'react'
import "../components/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


const Iphonemodels = () => {
  return (
    <div>
      <Navbar/>
      
      <div>
        <h1>What are you looking for?</h1>
        <p>Don't see your device lsited below? Search here</p>
        <button>search</button>
      </div>
      <div>
        <h2>Most Recent</h2>
        <button>iphone 14 Pro Max</button>
        <button>iphone 14 Pro</button>
        <button>iphone 14</button>
        <button>iphone 13 Pro Max</button>
      </div>

      <div>
        <h2>All Models</h2>
        <button>iphone 14 Pro Max</button>
        <button>iphone 14 Pro</button>
        <button>iphone 14</button>
        <button>iphone 13 Pro Max</button>
        <button>iphone 13 Pro</button>
        <button>iphone 13</button>
        <button>iphone 12 Pro Max</button>
        <button>iphone 12 Pro</button>
        <button>iphone 11 Pro Max</button>
        <button>iphone 11 Pro</button>
        <button>iphone 11</button>
        <button>iphone XS Max</button>
        <button>iphone XS</button>
        <button>iphone XR</button>
        <button>iphone X</button>
        <button>iphone 8 Plus</button>
        <button>iphone 8</button>
        <button>iphone 7 Plus</button>
        <button>iphone 7</button>
        <button>iphone SE</button>

      </div>

      <Footer/>
    </div>
  )
}

export default Iphonemodels
