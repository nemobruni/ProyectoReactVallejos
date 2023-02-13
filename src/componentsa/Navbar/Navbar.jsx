import React from "react";
import { Link } from "react-router-dom";
import logo from "../../cat-monogram.svg";
import "./Navbar.css";

function Navbar(props) {
  console.log(props);

  //////////////////////////////////////// Aca abajo es HTML
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </li>
        <li>LE PETICHA</li>
        <Link to="/category/1">
          <li>Categoria 1</li>
        </Link>
        <Link to="/category/2">
          <li>Categoría 2</li>
        </Link>
        <Link to="/cart">
          <li> Carrito</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
