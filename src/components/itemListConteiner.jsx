import React from "react";
import styles from "./itemList.module.css";
import { Link } from "react-router-dom";

const ItemListConteiner = ({ categorias }) => {
  return (
    <div className={styles.categories}>
      {categorias.map((el) => {
        return (
          <Link to={`/category/${el}`}>
            <button>{el}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default ItemListConteiner;
