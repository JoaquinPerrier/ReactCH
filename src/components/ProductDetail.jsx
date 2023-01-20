import React from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";

const ProductDetail = ({ data }) => {
  let { id } = useParams();

  id = parseInt(id);

  console.log("ID DE LA DATITA" + data[0].id);
  console.log("ID PÄRAM" + id);

  const item = data.find((item) => item.id === id);

  return <Products key={item.id} data={item} />;
};

export default ProductDetail;
