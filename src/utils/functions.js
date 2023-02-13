import { collection, addDoc, getFirestore } from "@firebase/firestore";
import { useContext } from "react";
import Swal from "sweetalert2";

export const handleCheckout = (cart, getTotal) => {
  const date = new Date().toLocaleString + "";
  const db = getFirestore();
  const collectionReference = collection(db, "orders");
  const orderList = {
    buyer: {
      name: "Alfredo Le Pera",
      email: "alfalfa@gmail.com",
      tel: 5454666577,
      direccion: "asdasdasd111111",
    },
    items: cart.map((element) => ({
      id: element.item.id,
      cantidad: element.quantity,
      precio: element.item.price,
      nombre: element.item.title,
    })),
    date: date,
    total: getTotal(),
  };
  addDoc(collectionReference, orderList).then((response) => {
    console.log(response);
    Swal.fire({
      icon: "success",
      title: "Tu orden fue confirmada",
      text:
        `Va a llegar a tu domicilio en 24 horas  -  El ID de tu orden es: ` +
        response.id,
    });
  });
};
