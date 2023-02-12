import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//PASO -1: IMPORTAR PRODUCTOS DEL ARCHIVO JS(DE OBJETOS)
import { data } from "../../data/data";
import ItemList from "../ItemList/ItemList";
import ReactLoading from "react-loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer() {
  //PASO 0: CREO ESTADO PARA GUARDAR LOS PRODUCTOS QUE VIENEN DE TU 'JSON'
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  // PASO 2: CREAR EL USE EFFECT QUE SE EJECUTA UNA VEZ CUANDO EL COMPONENTE SE RENDERIZA
  //LOS USE EFFECT GENERALMENTE VAN DIRECTAMENTE ABAJO DE LOS ESTADOS

  //USE EFFECT: Es una funcion de ciclo de vida, yo elijo en q momento se va a ejecutar.
  //Uso el use effect ahora para llamar  a la promesa

  const db = getFirestore();

  const itemsCollection = collection(db, "animal-food");
  console.log(id);

  useEffect(() => {
    //PASO 3: LLAMO A LA PROMESA, Y LE DIGO QUE CUANDO TERMINE LA PROMESA, LLENE EL ESTADO CON
    //      EL RESULTADO DE LA PROMESA
    setLoading(true);
    if (id) {
      
      const queryFiltrado = query(itemsCollection, where("category", "==", parseInt(id)));
      getDocs(queryFiltrado).then((data) => {
        setProductos(
            data.docs.map((document) => ({
              id: document.id,
              ...document.data(),
            }))
          );
          setLoading(false);
      }).catch((err) => console.log(err));
      
    } else {
      getDocs(itemsCollection).then((data) => {
        setProductos(
          data.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
        setLoading(false);
      });
    }

    //NOTA: QUE EL ARRAY DE DEPENDENCIAS ESTE VACIO SIGNIFICA QUE EL USE EFFECT SE VA A
    //EJECUTAR SOLO UNA VEZ CUANDO EL COMPONENTE SE RENDERICE

    //SI EL ARRAY DE DEPENDENCIAS TIENE UNA VARIABLE O VARIAS ADENTRO, SIGNIFICA QUE VIGILA A ESAS VARIABLES,
    //O SEA QUE SI ESAS VARIABLE CAMBIAN, EL USE EFFECT SE VA A DISPARAR CADA VEZ QUE CAMBIEN
  }, [id]);

  // PASO 1: CREO PROMESA QUE RESUELVE A LA LISTA DE PRODUCTOS(O SEA DEVUELVE LOS PRODUCTOS)
  //  const promesa = new Promise((resolve, reject) => {
  //     setTimeout(() => {

  //         if(id){
  //             let filteredProducts = data.filter((item) => item.category == id)
  //             console.log(filteredProducts)
  //             resolve(filteredProducts);
  //         }else{
  //             resolve(data)

  //         }
  //     }, 2000);
  // })

  return (
    //PASO 4: LE PASO A ITEMLIST LOS PRODUCTOS POR PROPS
    //PASO 5 EN COMPONENTE ITEMLIST
    <div className="item-list-container">
      {loading ? (
        <ReactLoading type="spin" color="white" height={100} width={100} />
      ) : (
        <ItemList productos={productos} comida="milanesa" />
      )}
    </div>
  );
}

export default ItemListContainer;
