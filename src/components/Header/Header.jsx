import React from 'react'
import Logo from "../../assets/logo.png"
import "./Header.css"
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt=''className='logo'/>
      <ul className='header-menu'>
        <li>Home</li>
        <li><Link to="about-us" span={true} smooth={true}>About us</Link></li>
        <li><Link to='exchange' span={true} smooth={true}>Currency Exchange</Link></li>       
        <li><Link to='contact-us' span={true} smooth={true}>Contact us</Link></li>        
      </ul>
    </div>
  )
}

export default Header
