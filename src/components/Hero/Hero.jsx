import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='blur hero-blur'></div>
        <div className='left-h'>
            <Header />
            {/* the best ad */}
            <div className='the-best-ad'>
                <div></div>
                <span>best black market myanmar exchange rate</span>
            </div>

            {/* Heading */}
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Myanmar </span>
                    <span>Exchange</span>
                </div>
                <div>
                    <span>Rate</span>
                </div>
                <div>
                    <span>
                        Global currency conversions & money transfers
                    </span>                    
                </div>
            </div>

            {/* figure */}
            <div className='figures'>
                <div>
                    <span>+20</span>
                    <span>Currencies</span>
                </div>
                <div>
                    <span>+100</span>
                    <span>Login Users</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>Downloads</span>
                </div>
            </div>

            {/* button */}
            <div className="hero-buttons">
                <buttons className="btn">Sign Up</buttons>
                <buttons className="btn">Sign In</buttons>
            </div>
        </div>
    </div>
  )
}

export default Hero
