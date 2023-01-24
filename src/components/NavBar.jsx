import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import styles from "./navBar.module.css";

let nombre = "Joaquin Perrier";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className="izq-navbar">
        <Link to="/">
          <i className="fa-solid fa-user fa-2x"></i>
        </Link>
        <h4>{nombre}</h4>
      </div>
      <div className="der-navbar">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
