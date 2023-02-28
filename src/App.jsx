import "./App.css";
import React, { useEffect, useState, createContext } from "react";
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
  deleteField,
} from "firebase/firestore";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import CartContext from "./contexts/CartContext";

function App() {
  const [loading, setLoading] = useState(true);

  // Obtener carrito
  const [cart, setCart] = useState([]);
  const carritosCollectionRef = collection(db, "carritos");
  const getCart = async () => {
    const querySnapshot = await getDocs(carritosCollectionRef);
    await setCart(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), f_id: doc.id }))
    );
  };

  // Obtener productos
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "items");
  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    await setItems(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), f_id: doc.id }))
    );

    setLoading(false);
  };

  const addItemToCart = async (indexProd, cantidad) => {
    if (!cart[0].productos) {
      let itemToAdd = items.find((el) => el.id == indexProd);
      itemToAdd.cantidad = cantidad;

      const prodRef = doc(db, "carritos", cart[0].f_id);
      await updateDoc(prodRef, {
        productos: arrayUnion(itemToAdd),
      });
    } else {
      if (cart[0].productos.find((el) => el.id == indexProd)) {
        let indexItem = cart[0].productos.findIndex((el) => el.id == indexProd);

        cart[0].productos[indexItem].cantidad =
          cart[0].productos[indexItem].cantidad + cantidad;

        const prodRef = doc(db, "carritos", cart[0].f_id);
        await updateDoc(prodRef, {
          productos: deleteField(),
        });
        await updateDoc(prodRef, {
          productos: cart[0].productos,
        });
      } else {
        let itemToAdd = items.find((el) => el.id == indexProd);
        itemToAdd.cantidad = cantidad;

        const prodRef = doc(db, "carritos", cart[0].f_id);
        await updateDoc(prodRef, {
          productos: arrayUnion(itemToAdd),
        });
      }
    }

    getCart();
    alert("Producto agregado con éxito!!");
  };

  const finishBuy = async () => {
    if (confirm("Esta seguro que desea comprar los items?")) {
      const cartRef = doc(db, "carritos", cart[0].f_id);

      await updateDoc(cartRef, {
        productos: deleteField(),
      });

      getCart();
      alert(
        `Productos comprados con éxito! Los mismos llegarán entre 7 y 10 días hábiles a ${cart[0].domicilio}, ${cart[0].ciudad}, ${cart[0].pais}`
      );
    }
  };

  const emptyCart = async () => {
    if (confirm("Esta seguro que desea borrar los items del carrito?")) {
      const cartRef = doc(db, "carritos", cart[0].f_id);

      await updateDoc(cartRef, {
        productos: deleteField(),
      });

      getCart();
      alert(`Productos eliminados con éxito`);
    }
  };

  const deleteItem = async (id) => {
    let newArray = cart[0].productos.filter((el) => el.id != id);

    const cartRef = doc(db, "carritos", cart[0].f_id);

    if (newArray[0] == null) {
      await updateDoc(cartRef, {
        productos: deleteField(),
      });
    } else {
      await updateDoc(cartRef, {
        productos: deleteField(),
      });
      await updateDoc(cartRef, {
        productos: newArray,
      });
    }

    getCart();
    alert("Item eliminado del carrito con éxito!");
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
          element={
            <List
              list={items}
              categorias={categorias}
              addItemToCart={addItemToCart}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            loading ? (
              <Loader />
            ) : (
              <ProductDetail
                data={items}
                categorias={categorias}
                addItemToCart={addItemToCart}
              />
            )
          }
        />

        <Route
          path="/cart"
          element={
            loading ? (
              <Loader />
            ) : (
              <CartContext.Provider value={cart[0]}>
                <PersonalDetails
                  data={cart[0]}
                  finishBuy={finishBuy}
                  emptyCart={emptyCart}
                  deleteItem={deleteItem}
                />
              </CartContext.Provider>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
