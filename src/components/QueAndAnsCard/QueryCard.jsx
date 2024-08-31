import React from "react";
import styles from "./QueryCard.module.css";
import ULogo from "../../assets/user.png"
const QueryCard = ({q,t})=>{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    return(
        <div className={`${styles.queryCard} d-flex`}>
            <div className={styles.imgDiv}>
               <span className={styles.logoDiv}><img src={ULogo} width="80px" height="80px"/></span>
            </div>
            <div className={`${styles.queDiv} d-flex flex-column justify-content-between`}>
                <div className={styles.text}>
                <h5>You</h5>
                <span>{q}</span>
                </div>
                <span>{t} AM</span>
            </div>
        </div>
    )

}
export default QueryCard;