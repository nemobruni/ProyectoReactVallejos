import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import './CartView.css';
import CartItem from "../CartItem/CartItem";

const CartView = () => {
  const { cart, removeFromCart, getTotal } = useContext(CartContext);

  return cart.length > 0 ? (
    <div className="full-cart-container">
      {cart.map((e) => (
        <CartItem
            element={e}
            key={e.item.id}
            removeFromCart={removeFromCart}
        />
      ))}
      <div>
        <h4>Precio total: {getTotal()} </h4>
        <Link to='/order'>
          <button> Finalizar compra </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="empty-cart-container">
      <h1>No hay elementos en el carrito</h1>
      <Link to="/items">
        {" "}
        <button className="button"> Volver </button>{" "}
      </Link>
    </div>
  );
};

export default CartView;
