import React from "react";
import styles from "./itemList.module.css";
import { Link } from "react-router-dom";

const ItemListConteiner = ({ categorias }) => {
  return (
    <div className={styles.categories} key={0}>
      {categorias.map((el, index) => {
        return (
          <Link to={`/category/${el}`} key={index}>
            <button>{el}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default ItemListConteiner;
