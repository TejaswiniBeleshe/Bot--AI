import React, { useContext } from "react";
import styles from "./BotContent.module.css"
import Initial from "../Initial/Initial";
import QueryCard from "../QueAndAnsCard/QueryCard";
import Ans from "../QueAndAnsCard/Ans";
import { aiContent } from "../../App";
import Model from "../Model/Model";

const BotContent = ({handleShow,handleClose})=>{
  
    const {allList,showModel} = useContext(aiContent);
    return(
        <div className={`${styles.botContent}`}>
           
           {
            allList.length?allList.map((ele)=>{
                // console.log(ele)
                return<><QueryCard q={ele.q} t={ele.t} /><Ans ele={ele} handleShow={handleShow} /></>
            }):<Initial/>
           }   
           {showModel?<Model handleClose={handleClose} />:""}        
        </div>
    )
}
export default BotContent;