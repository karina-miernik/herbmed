import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, description, photo, heals,cures, id, buttonText, linkTo, headerLink, curesText }) => {
  return (
    
        <div className={styles.herb}>
        <Link to={headerLink} className={styles.link}>
        <div className={styles.photoContainer}>
          <div><img src={photo} className={styles.photo} alt="herb image"/></div>
          <div className={styles.name}>{name}</div>
        </div>
        </Link>
        <div>{description}</div>
        <h3>IT HEALS</h3>
        <div>• {heals}</div>
        <h3>{curesText}</h3>
        <div>{cures}</div>
        <div className={styles.buttonContainer}>
          <Link to={linkTo} className={styles.link}>
            <button className={styles.button}>{buttonText}</button>
          </Link>
        </div>
      </div>
  );
};

export default Card;