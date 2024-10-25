import { observer, inject } from 'mobx-react';
import React from 'react'

const Dashboard = inject("store")(
    observer((props) => {
        const { _handleLogout } = props.store.login;
        return (
            <div><button type="button" onClick={(e) => _handleLogout()}>Logout</button></div>
        );
    })  
);

export default Dashboard