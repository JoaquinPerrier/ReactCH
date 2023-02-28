import { useContext } from "react";
import styles from "./personalDetails.module.css";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";

const PersonalDetails = ({ data, finishBuy, emptyCart, deleteItem }) => {
  let cart = useContext(CartContext);

  let totalPrice = 0;
  if (cart.productos) {
    cart.productos.forEach((el) => {
      totalPrice = totalPrice + el.price * el.cantidad;
    });
  }

  return (
    <div className={styles.conteiner}>
      <div className={`col ${styles.avatar}`}>
        <img src={cart.avatar} className="card-img-top" alt="..." />
      </div>
      <div className="col">
        <div className={`col ${styles.personales}`}>
          <u>
            <h3>Datos personales:</h3>
          </u>
          <h4>
            <u>Nombre y Apellido:</u> {cart.nombre}
            {cart.apellido}
          </h4>
          <h4>
            <u>DNI:</u> {cart.dni}
          </h4>
          <h4>
            <u>Domicilio:</u> {cart.domicilio}
          </h4>
          <h4>
            <u>Ciudad:</u> {cart.ciudad}
          </h4>
          <h4>
            <u>Pais:</u> {cart.pais}
          </h4>
        </div>
        <div className={styles.prod}>
          <h3>
            {" "}
            <u>Productos:</u>
          </h3>

          {!cart.productos ? (
            <h5>
              Todavía no posees productos en tu carrito! En{" "}
              {<Link to="/">el siguiente link</Link>} podes volver al catálogo
              de productos
            </h5>
          ) : (
            cart.productos.map((el, index) => {
              return (
                <div
                  className={`container text-center ${styles.prod}`}
                  key={index}
                >
                  <div className="row">
                    <div className="col">
                      <h5>{el.title}</h5>
                    </div>
                    <div className="col">
                      <img src={el.image} className="card-img-top" alt="..." />
                    </div>
                    <div className="col">
                      <h5>$ {el.price} c/u</h5>
                    </div>
                    <div className="col">
                      <h5>Amount: {el.cantidad}</h5>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                          deleteItem(el.id);
                        }}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {cart.productos ? (
            <>
              <div className={`row ${styles.totalPrice}`}>
                <div>
                  <h3>Total:</h3>
                </div>
                <div>
                  <h5>$ {totalPrice}</h5>
                </div>
              </div>
              <div className={`row ${styles.buttonContainer}`}>
                <Link to={`/`}>
                  <button className="btn btn-danger" onClick={emptyCart}>
                    Vaciar carrito!
                  </button>
                </Link>
                <Link to={`/`}>
                  <button className="btn btn-success" onClick={finishBuy}>
                    Finalizar compra!
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
