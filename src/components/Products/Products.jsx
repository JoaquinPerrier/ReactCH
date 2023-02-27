import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./products.module.css";

const Products = ({ data, addItemToCart }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleClick = () => {
    addItemToCart(data.id, cantidad);
  };

  return (
    <div className="card product col">
      <img src={data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">
          <u>Price:</u> ${data.price}
        </p>
        <p className="card-text">
          <u>Category:</u> {data.category}
        </p>
        <p className="card-text">
          <u>Amount:</u>{" "}
          <button
            className="btn-outline-dark"
            onClick={() => {
              setCantidad(cantidad - 1);
            }}
          >
            -
          </button>{" "}
          {cantidad}{" "}
          <button
            className="btn-outline-dark"
            onClick={() => {
              setCantidad(cantidad + 1);
            }}
          >
            +
          </button>
        </p>
        <Link
          to={
            useLocation().pathname.split("/")[1]
              ? `/product/${data.id}`
              : `product/${data.id}`
          }
        >
          <button
            type="button"
            className={`btn btn-outline-dark ${styles.buttons}`}
          >
            View item details
          </button>
        </Link>
        <button
          type="button"
          className={`btn btn-primary ${styles.buttons}`}
          onClick={handleClick}
        >
          Add to cart!
        </button>
      </div>
    </div>
  );
};

export default Products;
