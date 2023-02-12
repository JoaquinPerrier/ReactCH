import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import ItemListConteiner from "../ItemList/itemListConteiner";

const List = function ({ list, categorias }) {
  let { cat } = useParams();
  if (cat) {
    list = list.filter((el) => el.category == cat);
  }
  return (
    <>
      <ItemListConteiner categorias={categorias} />
      <div className="container text-center">
        <div className="row row-cols-3">
          {list.map((el) => {
            return <Products key={el.id} data={el} />;
          })}
        </div>
      </div>
    </>
  );
};

export default List;
