import React from 'react'
import './ItemListContainer.css'


function ItemListContainer(props) {
  return (
    <div id="fondo">
       <h1>{props.titulo}</h1> 
    </div>
  )
}

export default ItemListContainer