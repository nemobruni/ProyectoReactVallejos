import { data } from "autoprefixer";
import React from "react";
import "./Order.css";

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { handleCheckout } from "../../utils/functions";

const Order = () => {
  const { cart, getTotal } = useContext(CartContext);

  window.scrollTo(0, 0);

  return (
    <div className="all-container">
      <h2> ¿Confirmar Compra? </h2>

      {cart.map((element) => (
        <div className="order-item-container" key={element.item.id}>
          <p> {element.item.title} </p>-<span> ${element.item.price} </span>
          <br />
          <span> Cantidad: {element.quantity} </span>
          <hr></hr>
        </div>
      ))}

      <h4> Total de la compra: ${getTotal()} </h4>

      <button onClick={() => handleCheckout(cart, getTotal)}> Confirmar </button>
    </div>
  );
};

export default Order;
