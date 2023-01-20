import Products from "./Products";

const List = function ({ list }) {
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
