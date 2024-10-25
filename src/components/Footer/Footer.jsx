import React from 'react'
import './Footer.css'
import GitHub from "../../assets/github.png"
import LinkedIn from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr/>
        <div className='footer'>
            <div className="logo-f">
                <img src={Logo} alt=''/>
            </div>
            <div className="social-link">
                <img src={GitHub} alt=''/>
                <img src={LinkedIn} alt=''/>
                <img src={Instagram} alt=''/>
            </div>            
        </div>    
        <div className="blur blur-f-1"></div>    
        <div className="blur blur-f-2"></div>    
    </div>
  )
}

export default Footer