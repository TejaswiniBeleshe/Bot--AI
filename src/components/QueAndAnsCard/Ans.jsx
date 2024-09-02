import React, { useEffect, useState } from "react";
import styles from "./Ans.module.css";
import AILogo from "../../assets/logo.png"
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import Star from "../Ratings/Rating";

const Ans = ({ele,handleShow})=>{
   const [showRatings,setShowRatings] = useState(false)
   const handleStar  = ()=>{
        setShowRatings(true);
   }
    return(
    <div className={`${styles.ansCard} d-flex`}>
            <div className={styles.imgDiv}>
               <span className={styles.logoDiv}><img src={AILogo} width="80px" height="80px"/></span>
            </div>
            <div className={`${styles.ansDiv} d-flex flex-column justify-content-between`}>
                <div className={styles.text}>
                <h5>Bot AI</h5>
                <span>{ele.a}</span>
                </div>
                <div className="w-100 d-flex justify-content-between" style={{height:"15px"}}>
                   <span>{ele.t} {ele.t>='12'?"PM":"AM"}</span>
                   <div className="p-3 w-40 h-100 w-lg-30 d-flex justify-content-between" >
                      <BsHandThumbsDown onClick={()=>handleShow(ele.id)}/>
                      <BsHandThumbsUp onClick={handleStar} style={{marginBottom:".5rem"}} />
                   </div>
                </div>
                {showRatings?<Star ele={ele}/>:""}
                {ele.fb?<p className="my-1"><span style={{fontWeight:"700"}}>Feedback:</span>{ele.fb}</p>:""}  
            </div>
        
        </div>
    )
}

export default Ans;