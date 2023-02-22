import React from "react";
import { Link } from "react-router-dom";
import styles from "./cartWidget.module.css";

const CartWidget = ({ cart }) => {
  return (
    <div>
      <h2>{`${cart.nombre} ${cart.apellido}`}</h2>
      <Link to="/cart">
        <span className={`${styles.contadorConteiner} fa-layers`}>
          <i class="fas fa-shopping-cart fa-2x"></i>
          {cart.productos ? (
            <span className={`fa-layers-counter ${styles.asd}`}>
              {cart.productos.length}
            </span>
          ) : (
            <span className={`fa-layers-counter`}>0</span>
          )}
        </span>
      </Link>
    </div>
  );
};

export default CartWidget;
