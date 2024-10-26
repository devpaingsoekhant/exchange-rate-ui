import React from 'react'
import "../../Styles/Navbar.css"
import Logo from "../../assets/logo.png"
import UserImage from "../../assets/t-image1.png"
import { FaSearch , FaExpand   } from "react-icons/fa";
import { IoAppsSharp, IoNotifications, IoSettingsOutline    } from "react-icons/io5";

const navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={Logo} alt=''/>
            <span>Myanmar Exchange Rates</span>
        </div>
        <div className="nav-icons">
            <div className="nav-icon">
                <FaSearch />
            </div>
            <div className="nav-icon">
                <IoAppsSharp />
            </div>
            <div className="nav-icon">
                <FaExpand  />
            </div>
            <div className="nav-notification">
                <IoNotifications  />
                <span>1</span>
            </div>
            <div className="nav-user">
                <img src={UserImage} alt=''/>
                <span>Super Admin</span>
            </div>
            <div className="nav-icon">
                <IoSettingsOutline  />
            </div>
        </div>
    </div>
  )
}

export default navbar