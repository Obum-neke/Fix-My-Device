import React from 'react'
import "../components/iphonetype.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


const Iphonemodels = () => {
  return (
    <div>
        <Navbar/>

        <div className='header-one'>
      
        <h1 className='header-two'>What are you looking for?</h1>
        <p>Don't see your device lsited below? Search here</p>
        <button className='header-btn'>search</button>
      
      </div>
      <div className='btn1'>
        <h2 className='btnh2'>Most Recent</h2>
        <button className='btn1'>iphone 14 Pro Max</button>
        <button className='btn1'>iphone 14 Pro</button>
        <button className='btn1'>iphone 14</button>
        <button className='btn1'>iphone 13 Pro Max</button>
      </div>

      <div className='btn2'>
        <h2>All Models</h2>
        <div>
        <button className='btn2'>iphone 14 Pro Max</button>
        <button className='btn2'>iphone 14 Pro</button>
        <button className='btn2'>iphone 14</button>
        <button className='btn2'>iphone 13 Pro Max</button>
        </div>
        <div>
        <button className='btn3'>iphone 13 Pro</button>
        <button className='btn3'>iphone 13</button>
        <button className='btn3'>iphone 12 Pro Max</button>
        <button className='btn3'>iphone 12 Pro</button>
        </div>
        <div className='btn4'>
        <button className='btn4'>iphone 11 Pro Max</button>
        <button className='btn4'>iphone 11 Pro</button>
        <button className='btn4'>iphone 11</button>
        <button className='btn4'>iphone XS Max</button>
        </div>
        <div className='btn5'>
        <button className='btn5'>iphone XS</button>
        <button className='btn5'>iphone XR</button>
        <button className='btn5'>iphone X</button>
        <button className='btn5'>iphone 8 Plus</button>
        </div>
        <div className='btn6'>
        <button className='btn6'>iphone 8</button>
        <button className='btn6'>iphone 7 Plus</button>
        <button className='btn6'>iphone 7</button>
        <button className='btn6'>iphone SE</button>
        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default Iphonemodels
