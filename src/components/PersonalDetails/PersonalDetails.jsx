import React from "react";
import styles from "./personalDetails.module.css";
import { Link } from "react-router-dom";

const PersonalDetails = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.conteiner}>
      <div className="col">
        <img src={data.avatar} className="card-img-top" alt="..." />
      </div>
      <div className="col">
        <div>
          <u>
            <h3>Datos personales:</h3>
          </u>
          <h5>
            <u>Nombre y Apellido:</u> {data.nombre}
            {data.apellido}
          </h5>
          <h5>
            <u>DNI:</u> {data.dni}
          </h5>
          <h5>
            <u>Domicilio:</u> {data.domicilio}
          </h5>
          <h5>
            <u>Ciudad:</u> {data.ciudad}
          </h5>
          <h5>
            <u>Pais:</u> {data.pais}
          </h5>
        </div>
        <div>
          <u>
            <h3>Productos:</h3>
          </u>
          {data.productos[0] == "" ? (
            <h5>
              Todavía no posees productos en tu carrito! En{" "}
              {<Link to="/">el siguiente link</Link>} podes volver al catálogo
              de productos
            </h5>
          ) : (
            <h5>{data.productos}</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
