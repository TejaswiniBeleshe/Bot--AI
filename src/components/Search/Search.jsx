import React, { useContext,memo, useState} from "react";
import styles from "./Search.module.css"
import { aiContent } from "../../App";
import allData from "../../mockedData.json"
import Model from "../Model/Model";
const Search = ({handleClose})=>{
   
    const {ipState,setIpState,curAns,setCurAns,curQue,setCurQue,allList,setAllList,prevData,setPrevData,showModel,setShowModel,feedBack,setFeedBack} = useContext(aiContent);
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    const handleAsk = ()=>{
    //    setCurQue(ipState);
       let ansForQue =  allData.find(ele=>{
                //   console.log(ele);
                  return ele.question.toLowerCase().includes(ipState.toLowerCase()+" ");
                //   return "As an AI Language Model, I don't have the details";
        });
        
        console.log(ansForQue,"res")
        
        if(ansForQue &&ansForQue.hasOwnProperty("response")){
           setAllList([...allList,{id:Date.now(),q:ipState,a:ansForQue.response,t:`${h}:${m}`}]);
        }else{
           setAllList([...allList,{id:Date.now(),q:ipState,a:"As an AI Language Model, I don't have the details",t:`${h}:${m}`}])
        }
        setIpState('');
    }
    const handleSave = ()=>{ 
        setPrevData([...allList]);
        console.log('saved all');    
    }
   
    return(
        <>
        <div className={`${styles.searchDiv} w-100 d-flex justify-content-around align-items-center`}>
            <div className={`${styles.ipDiv}`}>
                <input type="text" value={ipState} onChange={(e)=>{setIpState(e.target.value)}}/>
            </div>
            <button className={styles.btn} onClick={handleAsk}>Ask</button>
            <button className={styles.btn} onClick={handleSave}>Save</button>
        </div>
        {showModel?<Model handleClose={handleClose} feedBack={feedBack} setFeedBack={setFeedBack} />:""}
        </>
    )
}

export default Search;