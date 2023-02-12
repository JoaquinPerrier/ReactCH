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

  useEffect(() => {
    getCart();
    getItems();
  }, []);

  let categorias = items.map((el) => el.category);
  const dataArr = new Set(categorias);
  categorias = [...dataArr];

  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner categorias={categorias} />

      <Routes>
        <Route
          path="/"
          element={loading ? <Loader /> : <List list={items} />}
        />

        <Route path="/category/:cat" element={<List list={items} />} />
        <Route
          path="/product/:id"
          element={loading ? <Loader /> : <ProductDetail data={items} />}
        />
      </Routes>
    </div>
  );
}

export default App;
