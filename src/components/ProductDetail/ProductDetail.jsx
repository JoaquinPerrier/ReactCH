import React from "react";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import ItemListConteiner from "../ItemList/itemListConteiner";

const ProductDetail = ({ data, categorias }) => {
  let { id } = useParams();

  id = parseInt(id);

  const item = data.find((item) => item.id === id);

  return (
    <>
      <ItemListConteiner categorias={categorias} />
      <div className="container text-center">
        <div className="row row-cols-3">
          <Products key={item.id} data={item} />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
