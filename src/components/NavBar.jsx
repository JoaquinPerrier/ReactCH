import React from 'react'
import CartWidget from './CartWidget';

let nombre = "Joaquin Perrier";


const NavBar = () => {
  return <div className='navbar'>
    <div className='izq-navbar'>
        <i className="fa-solid fa-user fa-2x" ></i>
        <h4>{nombre}</h4>
    </div>
    <div className='der-navbar'>
       <CartWidget/>
    </div>
  </div>
}

export default NavBar;