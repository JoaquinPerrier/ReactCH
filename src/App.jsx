import "./App.css";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/ItemListConteiner";
import Products from "./components/Products";
import { useEffect, useState } from "react";

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

      <div className="container text-center">
        <div className="row row-cols-3">
          {products.map((el) => {
            return <Products key={el.id} data={el} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
