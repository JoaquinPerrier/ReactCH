import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./products.module.css";

const Products = ({ data }) => {
  return (
    <div className="card product col">
      <img src={data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">Price: ${data.price}</p>
        <p className="card-text">Category: {data.category}</p>
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
        <button type="button" className={`btn btn-primary ${styles.buttons}`}>
          Add to cart!
        </button>
      </div>
    </div>
  );
};

export default Products;
