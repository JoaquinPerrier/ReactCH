import React from "react";
import { Link } from "react-router-dom";

const CartWidget = ({ cart }) => {
  return (
    <>
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping fa-2x"></i>
      </Link>
      <div>
        <h2>{`${cart.nombre} ${cart.apellido}`}</h2>
        {cart.productos[0] == "" ? (
          <h4>Cantidad de productos: {0}</h4>
        ) : (
          <h4>Cantidad de productos: {cart.productos.length}</h4>
        )}
      </div>
    </>
  );
};

export default CartWidget;
