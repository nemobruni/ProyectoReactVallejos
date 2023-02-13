import React,{useState} from 'react'

function Card(props) {
  //PASO 1: Creamos el estado y le agregamos un valor inicial
  const [stock, setStock] = useState(1)//Dentro del useState asignamos el valor inicial

  //PASO 2: Creamos funciones para modificar el estado y asignarlas a los botones
  function add (){
    //NOTA: EL estado solo se puede modificar con la funcion que extraemos del useState,
    //En este caso seria setStock, pero puede tener cualquier nombre
    setStock(stock + 1)
  }

  function substract (){
    setStock(stock - 1)
  }

  return (
    <div className='card'>
      <img src='https://http2.mlstatic.com/D_NQ_NP_799242-MLA44698671854_012021-V.webp'></img>
      <span>Celu</span>
      {/* //PASO 3: Asignamos el estado a una parte del JSX para que se muestre */}
      <span>Stock: {stock}</span>
      <div>
        {/* //PASO 4: Agregamos las funciones para modificar el estado a los botones  */}
        <button onClick={substract}>-</button> <button onClick={add}>+</button>
      </div>
    </div>
  )

}

export default Card