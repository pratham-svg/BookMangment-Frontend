import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<div className="w3-top">
  <div className="w3-bar w3-white w3-wide w3-padding w3-card">
    <Link href="#home" className="w3-bar-item w3-button" to='/'><b>PR</b>Panchariya</Link>
    <Link className="w3-bar-item w3-button" to="/">Home</Link>
    <Link className="w3-bar-item w3-button" to="/Books">Books</Link>
    <Link className="w3-bar-item w3-button" to="/About">About</Link>
    <div className="w3-right w3-hide-small">
      <Link className="w3-bar-item w3-button" to="/LogIn">LogIn</Link>
      <Link className="w3-bar-item w3-button" to="/SignUp">SignUp</Link>
    </div>
  </div>
</div>
  </div>
  )
}

export default Navbar
