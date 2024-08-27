import React from "react";
import styles from "./Card.module.css"
const Card = ({h,t})=>{
    return(
        <div className={styles.card}>
            <h5>{h}</h5>
            <p>{t}</p>
        </div>
    )
}

export default Card;