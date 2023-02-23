import React from "react";
import styles from "./personalDetails.module.css";
import { Link } from "react-router-dom";

const PersonalDetails = ({ data, finishBuy, emptyCart }) => {
  let totalPrice = 0;
  data.productos.forEach((el) => {
    totalPrice = totalPrice + el.price;
  });

  return (
    <div className={styles.conteiner}>
      <div className={`col ${styles.avatar}`}>
        <img src={data.avatar} className="card-img-top" alt="..." />
      </div>
      <div className="col">
        <div className={`col ${styles.personales}`}>
          <u>
            <h3>Datos personales:</h3>
          </u>
          <h4>
            <u>Nombre y Apellido:</u> {data.nombre}
            {data.apellido}
          </h4>
          <h4>
            <u>DNI:</u> {data.dni}
          </h4>
          <h4>
            <u>Domicilio:</u> {data.domicilio}
          </h4>
          <h4>
            <u>Ciudad:</u> {data.ciudad}
          </h4>
          <h4>
            <u>Pais:</u> {data.pais}
          </h4>
        </div>
        <div className={styles.prod}>
          <h3>
            {" "}
            <u>Productos:</u>
          </h3>

          {!data.productos ? (
            <h5>
              Todavía no posees productos en tu carrito! En{" "}
              {<Link to="/">el siguiente link</Link>} podes volver al catálogo
              de productos
            </h5>
          ) : (
            data.productos.map((el, index) => {
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
                      <h5>$ {el.price}</h5>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {data.productos ? (
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
