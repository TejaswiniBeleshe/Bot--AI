import React from "react"
import styles from "./Initial.module.css"
import Card from "./Card";
import AILogo from "../../assets/logo.png"
const Initial = ()=>{
    const que = [
        {h:"Hi, what is the weather",t:"Get immediate AI generated response"},
        {h:"Hi, what is my location",t:"Get immediate AI generated response"},
        {h:"Hi, what is the temperature",t:"Get immediate AI generated response"},
        {h:"Hi, how are you",t:"Get immediate AI generated response"},

    ]
    return(
        <div className={`${styles.initial} w-100 d-flex flex-column justify-content-between`}>
            <div className={`${styles.iniHeading} w-100 `}>
                <h2>How Can I Help you Today?</h2>
                <span className={styles.logoDiv}><img src={AILogo} width="90px" height="90px"/></span>

            </div>
            <div className={`${styles.queDemo} w-100 d-flex flex-wrap`}>
                {
                    que.map((each)=>{
                        return <Card h={each.h} t={each.t} key={Date.now()}/>
                    })
                }
                

            </div>

        </div>
    )
}
export default Initial;