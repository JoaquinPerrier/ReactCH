import "./App.css";
import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/ItemListConteiner";
import Products from "./components/Products";
import List from "./components/List";

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

      {/* <div className="container text-center">
        <div className="row row-cols-3">
          {products.map((el) => {
            return <Products key={el.id} data={el} />;
          })}
        </div>
      </div> */}

      <Routes>
        <Route path="/" element={<List list={products} />} />
        {/* <Route path="/products" element={} />
        <Route path="/movies/:name" element={<ItemDetail data={data} />} />
        <Route path="/series" element={<List list={series} />} />
        <Route path="/series/:name" element={<ItemDetail data={data} />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
