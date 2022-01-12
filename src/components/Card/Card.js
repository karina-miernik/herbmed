import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, description, photo, heals,cures, id }) => {
  return (
        <div className={styles.herb}>
        <div className={styles.photoContainer}>
          <div className={styles.name}>{name}</div>
          <div><img src={photo} className={styles.photo} alt="herb image"/></div>
        </div>
        <div>{description}</div>
        <h3>It heals:</h3>
        <div>• {heals}</div>
        <h3>How it cures?</h3>
        <div>{cures}</div>
        <div className={styles.buttonContainer}>
          <Link to={`/herbs/${id}`} className={styles.link}>
            <button className={styles.button}>Learn more</button>
          </Link>
        </div>
      </div>
  );
};

export default Card;