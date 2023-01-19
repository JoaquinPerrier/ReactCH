import React from "react";

const Products = ({ data }) => {
  return (
    <div className="card product col">
      <img src={data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">Price: {data.price}</p>
        <p className="card-text">Category: {data.category}</p>
        <a href="#" className="btn btn-primary">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Products;
