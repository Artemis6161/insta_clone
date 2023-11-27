import React from 'react'
import logo from '../img/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav_bar'>
      <img src={logo} alt="logo" />
      <ul className='nav_menu'>
        <li>sign up</li>
        <li>sign in</li>
        <li>Profile</li>
      </ul>
    </div>
  )
}

export default Navbar
