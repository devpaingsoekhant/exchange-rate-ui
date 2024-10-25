import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='' id="contact-us">        
        <div className='contact-us'>
            <div className="w-left">
                <div className="awesome">
                    <div>
                        <span>Contact</span>
                    </div>
                    <div>
                        <span className='stroke-text'>With</span>
                        <span>Us</span>
                    </div>
                </div>
                <div className='contact-us-message'>
                    <p>
                        If you have any inquiries, experience issues with the rates, or have suggestions for improvement, we'd love to hear from you. 
                        Please don't hesitate to reach out to us.
                    </p>
                </div>
            </div>
            <div className="c-right">
                <form action="">
                    <input type="text" className="user" name="user_name" placeholder='Name'/>
                    <input type="email" className="user" name="user_email" placeholder='Email'/>
                    <textarea name='message' className='user' placeholder='Message'/>
                    <input type="submit" value='Send' className='submit-button' />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
