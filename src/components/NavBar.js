import React from 'react'
import {Link}  from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <Link to='/'>Home</Link>|
    <Link to='/contact'>Contact</Link>|
    <Link to='/profile'>Profile</Link>|
    <Link to='/products'>Products</Link>
    

    
    </div>
  )
}

export default NavBar
