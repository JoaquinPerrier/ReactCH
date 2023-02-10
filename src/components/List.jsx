import Products from "./Products";
import { useParams } from "react-router-dom";

const List = function ({ list }) {
  let { cat } = useParams();
  if (cat) {
    list = list.filter((el) => el.category == cat);
  }
  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        {list.map((el) => {
          return <Products key={el.id} data={el} />;
        })}
      </div>
    </div>
  );
};

export default List;
