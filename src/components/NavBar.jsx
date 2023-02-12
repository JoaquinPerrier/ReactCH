import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import styles from "./navBar.module.css";

let brand = "Items for everyone";

const NavBar = ({ cart }) => {
  return (
    <div className={styles.navbar}>
      <div className="izq-navbar">
        <Link to="/">
          <i className="fa-solid fa-house  fa-2x"></i>
        </Link>
        <h4>{brand}</h4>
      </div>
      <div className="der-navbar">
        <CartWidget cart={cart} />
      </div>
    </div>
  );
};

export default NavBar;
