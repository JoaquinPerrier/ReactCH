import React from "react";
import styles from "./itemList.module.css";

const ItemListConteiner = () => {
  return (
    <div className={styles.categories}>
      <p>Men's Clothing</p>
      <p>Jewelery</p>
      <p>Electronics</p>
      <p>Women's clothing</p>
    </div>
  );
};

export default ItemListConteiner;
