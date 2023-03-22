import React from 'react'
import './Navbar.css'

const Navbar = ({fetchApi}) => {
  const handleClick = () => {
    fetchApi()
  }
  return (
    <div className='navbar'>
        <h1>GK</h1>
        <button onClick={handleClick} className='getuser-btn'>Get Users</button>
    </div>
  )
}

export default Navbar