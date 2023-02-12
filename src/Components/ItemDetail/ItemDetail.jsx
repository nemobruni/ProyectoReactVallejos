import React, { useContext } from "react";
import "./ItemDetail.css";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const onAdd = (count) => {
    addToCart(product, count);
    Swal.fire(
      "Agregaste producto/s al carrito",
      `${product.title} - Cantidad: ${count}`,
      "success"
    );
  };
  return (
    <div className="item-detail">
      <p>{product.title}</p>
      <img src={product.pictureUrl} />
      <span>{product.description}</span>

      <ItemCount stock={5} onAdd={onAdd} initial={1} />
    </div>
  );
};

export default ItemDetail;
