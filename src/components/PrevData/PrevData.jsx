import React, { useContext } from "react";
import styles from "./PrevData.module.css";
import { aiContent } from "../../App";
import QueryCard from "../QueAndAnsCard/QueryCard";
import Ans from "../QueAndAnsCard/Ans";
import EachCard from "./EachCard";
import Rate from "../Ratings/Rating";

const PrevData = ()=>{
    const {prevData,setPrevData,setAllList} = useContext(aiContent);
    // setAllList([])
    
    return(
    
        
        <div className={`${styles.prevData} w-100 `}>
            {   prevData.length ?
                prevData.map((ele)=>{
                    return<><EachCard ele={ele}/></>
                }):""

            }
            {/* <EachCard/> */}
            {/* hello */}
         
        </div>
    
    )
}
export default PrevData;