import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='about-us' id="about-us">
        {/* header */}
        <div className="about-us-header">
            <span className='stroke-text'>About</span><span>Us</span>
        </div>

        <div className="about-us-body">
            <p>Welcome to the page of Myanmar Exchange rate. 
                All about the rates are nearly same with the other rates in the black market. 
                Our mission is to provide you with up-to-date daily currency exchange rates. 
                We are committed to delivering accurate and timely information to help you stay informed.
                We don't set the market fluctuations ourselves. 
                Instead, we analyze, calculate, balance, and present them in real time.
            </p>
                       
        </div>
    </div>
  )
}

export default About