import React from "react";

const CartWidget = ({ cart }) => {
  console.log(cart);
  return (
    <>
      <i className="fa-solid fa-cart-shopping fa-2x"></i>
      <div>
        <h2>{`${cart.nombre} ${cart.apellido}`}</h2>
        {cart.productos ? (
          <h4>Cantidad de productos: {cart.productos.length}</h4>
        ) : (
          <h4>Cantidad de productos: {0}</h4>
        )}
      </div>
    </>
  );
};

export default CartWidget;
