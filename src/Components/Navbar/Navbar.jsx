import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

function Navbar() {
  return (
    <div id="Navbar-container">

    <ul id="Navbar-menu">
        <li>
            <a href="#Home">
                Home 
            </a>
        </li>


        <li>
            <a href="#Products">
                Products 
            </a>
        </li>

        
        <li>
            <a href="#AboutUs ">
                About Us 
            </a>
        </li>

        
        <li>
            <a href="#Contact">
                Contact 
            </a>
        </li>

        

        <CartWidget cantidad="2"/>

    </ul>


    </div>
  )
}

export default Navbar