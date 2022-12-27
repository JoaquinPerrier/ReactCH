import React from 'react'

let cantProd = 3;


const CartWidget = () => {
  return<>
        <i className="fa-solid fa-cart-shopping fa-2x"></i>
        <h4>Numero de productos: {cantProd}</h4>
        </>
}

export default CartWidget;