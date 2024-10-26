import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from "../components/Navbar/navbar"
import Footer from "../components/AdminPanelFooter/AdminFooter"
import Menu from "../components/Menu/menu"
import "../Styles/AdminLayout.css"

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
        <Navbar/>
        <div className="container">
            <div className="menuContainer">
                <Menu></Menu>
            </div>
            <div className="contentContainer">
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default AdminLayout