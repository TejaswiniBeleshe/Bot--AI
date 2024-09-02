import React, { useContext, useEffect, useState } from "react";
import styles from "./PrevData.module.css";
import { aiContent } from "../../App";
import QueryCard from "../QueAndAnsCard/QueryCard";
import Ans from "../QueAndAnsCard/Ans";
import EachCard from "./EachCard";
import Rate from "../Ratings/Rating";


const PrevData = ()=>{
    const {prevData,setPrevData,setAllList} = useContext(aiContent);
    const [stateRate,setStateRate] = useState(0);
    const [filtered,selectFiltered] = useState([]);
    // setAllList([])

    useEffect(()=>{
        let res = prevData.filter((ele)=>{
            return ele.rate === Number(stateRate);
        })
        // console.log(res);
        selectFiltered(res)

    },[stateRate])
    
    return(
    
        <div className="w-100 d-flex flex-column align-items-center">
        <div className="w-30 m-auto my-4 h-20"value={stateRate} onChange={(e)=>setStateRate(e.target.value)}>
            <select className="w-100 h-100 text-center" style={{borderRadius:"10px"}}>
                <option value="">filter by ratings</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>
        </div>
        <div className={`${styles.prevData} w-100 `}>
            {  !stateRate? prevData.length ?
                prevData.map((ele)=>{
                    return<><EachCard ele={ele}/></>
                }):""
                :filtered.map((el)=>{
                    return<><EachCard ele={el}/></>
                })
            }
            {/* <EachCard/> */}
            {/* hello */}
         
        </div>
        </div>
    
    )
}
export default PrevData;