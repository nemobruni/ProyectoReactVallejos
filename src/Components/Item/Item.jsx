import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

function Item({producto}) {
    //PASO 7: RECIBO PRODUCTO POR PROPS, UN PRODUCTO


    //PASO 8: MUESTRO EL HTML DE UN PRODUCTO CON LOS DATOS QUE ME VIENEN POR PROPS
  return (
    <div className='card'>
      <img className='card-image' src={producto.pictureUrl}></img>
      <span>{producto.title}</span>
      <br/>
      <div>
        <span>{producto.description}</span>
      </div>
      <ItemCount stock={5} initial={0} onAdd={null}/>
    </div>
  )
}

export default Item