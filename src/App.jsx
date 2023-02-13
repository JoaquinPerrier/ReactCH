import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import List from "./components/List/List";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Loader from "./components/Loader/Loader";
import db from "../db/firebase-config";
import {
  getDocs,
  collection,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";

function App() {
  const [loading, setLoading] = useState(true);

  const [cart, setCart] = useState([]);

  // Obtener carrito
  const carritosCollectionRef = collection(db, "carritos");
  const getCart = async () => {
    const querySnapshot = await getDocs(carritosCollectionRef);
    setCart(querySnapshot.docs.map((doc) => ({ ...doc.data(), f_id: doc.id })));
  };

  // Obtener datos de productos
  const [items, setItems] = useState([]);

  const itemsCollectionRef = collection(db, "items");

  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    setItems(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), f_id: doc.id }))
    );

    setLoading(false);
  };

  const addItemToCart = async (indexProd) => {
    console.log(indexProd);
    let itemToAdd = items.find((el) => el.id == indexProd);
    console.log(itemToAdd);
    const prodRef = doc(db, "carritos", cart[0].f_id);
    await updateDoc(prodRef, {
      productos: arrayUnion(itemToAdd),
    });
    getCart();
    alert("Producto agregado con éxito!!");
  };

  useEffect(() => {
    getCart();
    getItems();
  }, []);

  let categorias = items.map((el) => el.category);
  const dataArr = new Set(categorias);
  categorias = [...dataArr];

  return (
    <div className="App">
      {!loading ? <NavBar cart={cart[0]} /> : <></>}

      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loader />
            ) : (
              <List
                list={items}
                categorias={categorias}
                addItemToCart={addItemToCart}
              />
            )
          }
        />

        <Route
          path="/category/:cat"
          element={<List list={items} categorias={categorias} />}
        />
        <Route
          path="/product/:id"
          element={
            loading ? (
              <Loader />
            ) : (
              <ProductDetail data={items} categorias={categorias} />
            )
          }
        />

        <Route
          path="/cart"
          element={loading ? <Loader /> : <PersonalDetails data={cart[0]} />}
        />
      </Routes>
    </div>
  );
}

export default App;
