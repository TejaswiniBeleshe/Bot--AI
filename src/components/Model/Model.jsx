import React,{useEffect} from "react";
import { createPortal } from "react-dom"
import styles from "./Model.module.css"
import { HiOutlineLightBulb } from "react-icons/hi";

const Model = ({handleClose,feedBack,setFeedBack})=>{
    useEffect(()=>{
        document.body.style.scroll = "none";
        return ()=>{                                   //side effects of previous render cleaned before running the side effect for current render
            document.body.style.scroll = "scroll";
        }
    },[])
  
    return createPortal(
        <>
        <div className={styles.modalWrapper} ></div>
            <div className={styles.modalContainer}>
              <h5><HiOutlineLightBulb />Provide additional feedback</h5>
              <textarea row={10} column={50} value={feedBack} onChange={(e)=>setFeedBack(e.target.value)}/>
               <button onClick={()=>handleClose()} style={{textAlign:"end"}}>close</button> 
            </div>
        </>,document.querySelector(".portal")
    )
}
export default Model;