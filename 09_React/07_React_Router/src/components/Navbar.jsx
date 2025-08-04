import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
            <ul className='ul'>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li className='li'>Home</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/About"><li className='li'>About</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Login"><li className='li'>Login</li></NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar