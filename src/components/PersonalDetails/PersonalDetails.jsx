import React from "react";
import styles from "./personalDetails.module.css";

const PersonalDetails = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.conteiner}>
      <div className="col">
        <img src={data.avatar} className="card-img-top" alt="..." />
      </div>
      <div className="col">PersonalDetails</div>
    </div>
  );
};

export default PersonalDetails;
