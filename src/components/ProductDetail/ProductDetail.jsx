import React from "react";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";

const ProductDetail = ({ data }) => {
  let { id } = useParams();

  id = parseInt(id);

  const item = data.find((item) => item.id === id);

  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        <Products key={item.id} data={item} />
      </div>
    </div>
  );
};

export default ProductDetail;
