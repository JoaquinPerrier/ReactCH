import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/itemListConteiner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting={"Bienvenido! Eija un producto"}/>
    </div>
  )
}

export default App
