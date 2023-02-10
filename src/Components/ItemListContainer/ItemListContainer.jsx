import React from 'react'
//-1 debo importar el archivo data.js (en data se guardan productos)
import { data } from '../../data'
import ItemList from '../ItemList/ItemList'
import { useState } from 'react'
import './ItemListContainer.css'
import { useEffect } from 'react'


function ItemListContainer(props) {


  //0 debo crear un estado para que se guarden los productos
  const [productos, setProductos] = useState([])


  // 2 debo crear un useEffect para renderizar el componente
  // siempre debe ir debajo de useState

  useEffect(() => {


    // 3  dentro de useEffect debo llamar a la promesa
    // espero a que la promesa se termine de ejecutar
    // una vez que la promesa termine debo llenar el estado con el resultado de la promesa


    promesa.then((resuelto) => setProductos(resuelto))


  }, [])



 //1  vamos a suponer resolove=devolver.
 //El siguiente paso es devolver la lista de productos
  const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(data)
    }, 1000
    );

  })

  return (
    <div id="fondo">
       <h1>{props.titulo}</h1> 

    // 4 uso props para pasar los productos a ItemList
   


    <div className='item-list-container'>

      <ItemList productos={productos} comida='milanesa'  />

      // 5 ahora nos vamos al componente ItemList

    </div>


    </div>
  )
}

export default ItemListContainer