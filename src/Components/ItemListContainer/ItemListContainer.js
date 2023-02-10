import React, { useEffect, useState } from 'react'
//PASO -1: IMPORTAR PRODUCTOS DEL ARCHIVO JS(DE OBJETOS)
import { data } from "../../data/data"
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {
    //PASO 0: CREO ESTADO PARA GUARDAR LOS PRODUCTOS QUE VIENEN DE TU 'JSON'
    const [productos, setProductos] = useState([])

    // PASO 2: CREAR EL USE EFFECT QUE SE EJECUTA UNA VEZ CUANDO EL COMPONENTE SE RENDERIZA
    //LOS USE EFFECT GENERALMENTE VAN DIRECTAMENTE ABAJO DE LOS ESTADOS
    
    //USE EFFECT: Es una funcion de ciclo de vida, yo elijo en q momento se va a ejecutar.
    //Uso el use effect ahora para llamar  a la promesa

    
    useEffect(() => {
       //PASO 3: LLAMO A LA PROMESA, Y LE DIGO QUE CUANDO TERMINE LA PROMESA, LLENE EL ESTADO CON
        //      EL RESULTADO DE LA PROMESA
        promesa.then((resultado) => setProductos(resultado))

        //NOTA: QUE EL ARRAY DE DEPENDENCIAS ESTE VACIO SIGNIFICA QUE EL USE EFFECT SE VA A 
        //EJECUTAR SOLO UNA VEZ CUANDO EL COMPONENTE SE RENDERICE

        //SI EL ARRAY DE DEPENDENCIAS TIENE UNA VARIABLE O VARIAS ADENTRO, SIGNIFICA QUE VIGILA A ESAS VARIABLES,
        //O SEA QUE SI ESAS VARIABLE CAMBIAN, EL USE EFFECT SE VA A DISPARAR CADA VEZ QUE CAMBIEN
    }, [])


     // PASO 1: CREO PROMESA QUE RESUELVE A LA LISTA DE PRODUCTOS(O SEA DEVUELVE LOS PRODUCTOS)
     const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1000);
    })

    //COMO MODIFICAR EL ESTADO ACTUAL
    function handleChangeState(){
        //COPIO EL ESTADO CON SPREAD OPERATOR
        const copiaEstado = [...productos];
        console.log(copiaEstado);
        //MODIFICO LA COPIA
        copiaEstado.shift()
        //ASIGNO EL ESTADO NUEVO
        setProductos(copiaEstado);
    }
    
  return (
    //PASO 4: LE PASO A ITEMLIST LOS PRODUCTOS POR PROPS
    //PASO 5 EN COMPONENTE ITEMLIST
    <div className='item-list-container'>
        <ItemList productos={productos} comida='milanesa'/>
    </div>
    
  )
}

export default ItemListContainer