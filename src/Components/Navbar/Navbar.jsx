import React from "react";
import logo from "../../logo.svg"
import "./Navbar.css"

function Navbar(props) {
    
    console.log(props)
    
    
    
    
    
    
    
    //////////////////////////////////////// Aca abajo es HTML
  return (
      <nav className="Navbar">
        <ul>
          <li>
            <img src={logo} className="App-logo" alt="logo" />
          </li>
          <li>React Carla</li>
          <li>{props.bienvenida}</li>
        </ul>
      </nav>
    
  );
}

export default Navbar;
