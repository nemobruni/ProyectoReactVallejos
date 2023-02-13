import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";

function ItemList({ productos }) {
  //PASO 5: RECIBO PRODUCTOS POR PROPS
  
  //PASO 6: MAPEO LOS PRODUCTOS A
  //        COMPONENTES ITEM(CADA ITEM RECIBE UN PRODUCTO)

  //PASO 7 EN COMPONENTE ITEM
  return (
    productos.map((producto) => (
      <Link to={`/detail/${producto.id}`}>
        <Item key={producto.id} producto={producto} />
      </Link>
    ))
  );
}

export default ItemList;
