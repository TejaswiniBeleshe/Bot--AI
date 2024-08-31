import React from "react";
import styles from "./EachCard.module.css";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import ULogo from "../../assets/user.png"
import AILogo from "../../assets/logo.png"
import { FaStar } from "react-icons/fa6";
import "../Ratings/Ratings.css"
const EachCard = ({ele})=>{
    return(
        <div className={`${styles.eachPrevDiv}`}>

          <div className={`${styles.queryCard} d-flex`}>
            <div className={styles.imgDiv}>
               <span className={styles.logoDiv}><img src={ULogo} width="80px" height="80px"/></span>
            </div>
            <div className={`${styles.queDiv} d-flex flex-column justify-content-between`}>
                <div className={styles.text}>
                <h5>You</h5>
                <span>{ele.q}</span>
                </div>
                <span>{ele.t} AM</span>
            </div>
           </div>

             <div className={`${styles.ansCard} d-flex`}>
            <div className={styles.imgDiv}>
               <span className={styles.logoDiv}><img src={AILogo} width="80px" height="80px"/></span>
            </div>
            <div className={`${styles.ansDiv} d-flex flex-column justify-content-between`} >
                <div className={styles.text}>
                  <h5>Bot AI</h5>
                  <span>{ele.a}</span>
                </div>
                <div className="w-100 d-flex justify-content-between align-items-center letter" style={{height:"15px"}}>
                   <span>{ele.t} AM</span> 
                   <div className="p-3 w-40 h-100 w-lg-30 d-flex justify-content-between" >
                      
                   </div>
                </div>
                <div>
                {
                [...Array(5)].map((_,i)=>{
                    i+=1;
                    console.log(ele.rate)
                    return <FaStar className={i <= (ele.rate) ? 'active' : 'inactive'} key={i} size={15} />
                })
            }

                </div>
                {ele.fb?<p className="my-3"><span style={{fontWeight:"700"}}>Feedback:</span>{ele.fb}</p>:""}
            </div>
        </div>
        </div>
    )
}
export default EachCard;