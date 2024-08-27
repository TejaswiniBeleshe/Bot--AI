import React from "react";
import styles from "./BotContent.module.css"
import Initial from "../Initial/Initial";

const BotContent = ()=>{
    return(
        <div className={`${styles.botContent} d-flex flex-wrap`}>
           <Initial/>

        </div>
    )

}

export default BotContent;