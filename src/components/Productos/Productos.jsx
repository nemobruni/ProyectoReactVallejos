import React from 'react'
import "./Productos.css"

function Productos(props) {

    console.log(props)
    console.log(props.cincuenta)


  return (
    <div>
        <h1 nombre="titulo"> Este es el titulo </h1>
       
        <div>
            <input placeholder='nombre'/>
            <input placeholder='apellido'/>
        </div>

        <spam>{props.cincuenta}</spam>
        <div>{props.llamado3}</div>
    </div>
  )
}

export default Productos