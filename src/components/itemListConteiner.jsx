import React from "react";
import styles from "./itemList.module.css";
import { Link } from "react-router-dom";

const ItemListConteiner = () => {
  return (
    <div className={styles.categories}>
      <Link to="/category/men-clothing">
        <button>Men's Clothing</button>
      </Link>
      <Link to="/category/jewelery">
        <button>Jewelery</button>
      </Link>
      <Link to="/category/electronics">
        <button>Electronics</button>
      </Link>
      <Link to="/category/women-clothing">
        <button>Women's clothing</button>
      </Link>
    </div>
  );
};

export default ItemListConteiner;
