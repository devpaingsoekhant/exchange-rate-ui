/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./LoginPage.css"
import { FaUser, FaLock  } from "react-icons/fa";
import { observer, inject } from 'mobx-react';

const LoginPage = inject("store")(
    observer((props) => {
        const { _handleLoginFromData, _handleLoginFormSubmit } = props.store.login;

        const handleSubmit = (event) => {
            event.preventDefault();
            _handleLoginFormSubmit();
        }

        return (
            <div className='wrapper'>
                <div className='login-form'>
                    <form onSubmit={handleSubmit} className='login'>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="email" name="username" placeholder='Email' 
                             onChange={(e) => _handleLoginFromData(e.target.name, e.target.value)}
                             required/>
                            <FaUser className='icon'/>
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder='Password' 
                             onChange={(e) => _handleLoginFromData(e.target.name, e.target.value)} 
                             required/>
                            <FaLock className='icon'/>
                        </div>
                        <div className="remember-forget">
                            <label><input type="checkbox" name="remember" />Remember me</label>
                            <a href="#">Forget password?</a>
                        </div>
        
                        <button type="submit">Login</button>
        
                        <div className='register-link'>
                            <p>Don't have an account?<a href='#'>Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
          );
    })
)

export default LoginPage;
