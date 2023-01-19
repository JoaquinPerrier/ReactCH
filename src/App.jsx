import "./App.css";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/itemListConteiner";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting={"Bienvenido! Eija un producto"} />
    </div>
  );
}

export default App;
