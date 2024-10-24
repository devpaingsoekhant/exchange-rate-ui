import { observer, inject } from 'mobx-react';
import React from 'react'
import Navbar from "../Navbar/navbar"
import Footer from "../AdminPanelFooter/AdminFooter"
import Menu from "../Menu/menu"

const Dashboard = inject("store")(
    observer((props) => {
        const { _handleLogout } = props.store.login;
        return (
            // <div><button type="button" onClick={(e) => _handleLogout()}>Logout</button></div>
            <div className='main'>
                <Navbar></Navbar>
                <div className="container">
                    <div className="menuContainer">
                        <Menu></Menu>
                    </div>
                    <div className="contentContainer">
                        
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    })  
);

export default Dashboard