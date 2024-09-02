import React,{useContext, useEffect} from "react";
import { createPortal } from "react-dom"
import styles from "./Model.module.css"
import { HiOutlineLightBulb } from "react-icons/hi";
import { aiContent } from "../../App";
const Model = ({handleClose})=>{
    const {feedBack,setFeedBack} = useContext(aiContent)
    useEffect(()=>{
        document.body.style.scroll = "none";
        return ()=>{                                   //side effects of previous render cleaned before running the side effect for current render
            document.body.style.scroll = "scroll";
        }
    },[])
    return createPortal(
        <>
        <div className={styles.modalWrapper} ></div>
            <div className={`${styles.modalContainer} d-flex flex-column`}>
              <h5><HiOutlineLightBulb />Provide additional feedback</h5>
               <textarea row={10} column={50} value={feedBack} onChange={(e)=>setFeedBack(e.target.value)}/>
               <button onClick={handleClose}>close</button> 
            </div>
        </>,document.querySelector(".portal")
    )
}
export default Model;