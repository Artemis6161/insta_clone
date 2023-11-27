import React from 'react'
import logo from "../img/logo.png"
import "./login.css"
import { Link } from 'react-router-dom'
const login = () => {
  return (
    <div className='signup'>
     <div className="form_container">
        <div className="form">
        <img src={logo} alt="logo" className='signup_logo'/>
        <div className="form_header">
          <p>Signup</p>
        </div>
        <div >
            <input type="email" name="email" id="email" placeholder='Email' />
            
        </div>
        <div>
            <input type="password" name ="password" id="password" placeholder='password' />
           
        </div>
        <input type='submit' className="submit_btn" value="login"/>
        
        <div className="signup_footer">
          <p>Don't have an account? 
          <Link to="/signup">
          <span style={{color:"blue", cursor:"pointer"}}>Signup</span>
          </Link>
          </p>
        </div>
        </div>
     </div>
    </div>
  )
}

export default login
