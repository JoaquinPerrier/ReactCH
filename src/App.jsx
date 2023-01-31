import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/ItemListConteiner";
import List from "./components/List";
import ProductDetail from "./components/ProductDetail";
import Loader from "./components/Loader";
import db from "../db/firebase-config";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener datos
  const [items, setItems] = useState([]);

  const itemsCollectionRef = collection(db, "items");

  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log(items);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner />

      <Routes>
        <Route
          path="/"
          element={loading ? <Loader /> : <List list={products} />}
        />
        <Route
          path="/category/men-clothing"
          element={
            <List
              list={products.filter((el) => el.category == "men's clothing")}
            />
          }
        />
        <Route
          path="/category/jewelery"
          element={
            <List list={products.filter((el) => el.category == "jewelery")} />
          }
        />
        <Route
          path="/category/electronics"
          element={
            <List
              list={products.filter((el) => el.category == "electronics")}
            />
          }
        />
        <Route
          path="/category/women-clothing"
          element={
            <List
              list={products.filter((el) => el.category == "women's clothing")}
            />
          }
        />
        <Route
          path="/product/:id"
          element={loading ? <Loader /> : <ProductDetail data={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
