import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul style={{display:"flex", alignItems: "center",justifyContent:"center", gap: "30px"}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/assessment">Assessment</Link></li>
        </ul>
    </div>
  )
}

export default Navbar