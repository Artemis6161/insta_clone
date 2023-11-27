import React from 'react'
import logo from "../img/logo.png"
import "./signup.css"
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='signup'>
      <div className="form_continer">
      <div className="form">
      <img src={logo} alt="logo" className='signup_logo'/>
        <div className="form_header">
          <p>Signup</p>
        </div>
        <div >
        <input type="email" name="email" id="email" placeholder='Email' />
            </div>
            <div>
            <input type="text" name="name" id="name" placeholder="Full Name"  />
            </div>
            <div>
            <input type="text" name="username" id="username" placeholder="username"  />
            </div>
            <div >
            <input type="password" placeholder='Password' />
            </div>
            <input type='submit' className="submit_btn" value="SignUp"/>
          
        
        <div className="signup_footer">
          <p>Already have an account? 
          <Link to="/login">
          <span style={{color:"blue", cursor:"pointer"}}>Login</span>
          </Link>
          </p>
        </div>
        <div className="signup_footer" style={{fontSize:"12px",
        margin:"3px 0px"}}>
          <p>By signing up, you agree to out Terms, <br /> privacy policy and
            cookies policy.</p>
        </div>
        

      </div>
      
      
    </div>
    </div>
  )
}

export default Signup
