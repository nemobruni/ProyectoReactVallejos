import React from 'react'
import './CartItem.css';

const CartItem = ({element, removeFromCart}) => {
  return (
    <div className="cart-card">
          <span> {element.item.title} </span>
          <span> {element.item.price} </span>
          <img className='cart-card-image' src={element.item.pictureUrl} />

          <span> Cantidad: {element.quantity} </span>
          <button onClick={() => removeFromCart(element.item.id)}> Eliminar </button>
    </div>
  )
}

export default CartItem