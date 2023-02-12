import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const db = getFirestore();
  const referenciaItems = doc(db, "animal-food", id);

  useEffect(() => {
    getDoc(referenciaItems)
      .then((data) => {
        setProduct({ id: data.id, ...data.data() });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="item-list-container">
      {loading ? (
        <ReactLoading type="spin" color="white" height={100} width={100} />
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
