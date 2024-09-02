import React, { useContext} from "react";
import styles from "./Search.module.css"
import { aiContent } from "../../App";
import allData from "../../mockedData.json"

const Search = ()=>{
    const {ipState,setIpState,allList,setAllList,setPrevData} = useContext(aiContent);
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    const handleAsk = ()=>{
    //    setCurQue(ipState);
    //    let ansForQue =  allData.find(ele=>{
    //             //   console.log(ele);
    //               return ele.question.toLowerCase().includes(ipState.toLowerCase()+" ");
    //             //   return "As an AI Language Model, I don't have the details";
    //     });
        
    //     console.log(ansForQue,"res")
    if(ipState.trim() === ''){
        alert('please clarify you query!')
        return
    }

    let arr = ipState.toLowerCase().split(' ');
    console.log(arr);
    let res,max=0;
    for(let i=0;i<allData.length;i++){
        let c=0;
        let a = allData[i].question.toLowerCase().split(' ');
        // console.log(a)
        for(let j=0;j<a.length;j++){
          if(arr.includes(a[j])){
            c+=1;
          }
        }
        console.log(c)
        if(c>max){
          max=c;
          res = allData[i]
        }
    }
    //   console.log(res)
    if(arr.length > 2 && max < 2){
        res = {}
    }
        
        if(res && res.hasOwnProperty("response")){
           setAllList([...allList,{id:Date.now(),q:ipState,a:res.response,t:`${h}:${m}`}]);
        }else{
           setAllList([...allList,{id:Date.now(),q:ipState,a:"As an AI Language Model, I don't have the details",t:`${h}:${m}`}])
        }
        setIpState('');
    }
    const handleSave = ()=>{ 
        setPrevData([...allList]);
        // console.log('saved all');    
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
        
        </>
    )
}

export default Search;