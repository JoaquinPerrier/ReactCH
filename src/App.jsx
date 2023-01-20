import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/ItemListConteiner";
import List from "./components/List";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner />

      <Routes>
        <Route path="/" element={<List list={products} />} />
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
          element={<ProductDetail data={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
