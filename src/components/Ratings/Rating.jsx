import React, { useContext, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import styles from "./Rating.module.css"
import { aiContent } from "../../App";
const Star = ({ele})=>{
    const {allList,setAllList} = useContext(aiContent);
    const [ratings,setRatings] = useState(0)
    const [tId,setTId] = useState('');
    const [hover,setHover] = useState(0)

    const handleClick = (curIdx,Id)=>{
        // console.log(curIdx)
        setRatings(curIdx);
        mapRatings(Id,curIdx)
       

    }
    const handleMouseEnter = (mouseIdx)=>{
        setHover(mouseIdx)
    
    }
    function mapRatings(Id,curIdx){
        let res = allList.map((ele,i)=>{
            if(ele.id === Id){
                ele.rate = curIdx;
                return ele;
            }
            return ele;
        })
        // console.log(res,'res');
        setAllList(res)

    }
    return(
        <div className="my-2">
            {
                [...Array(5)].map((_,i)=>{
                    i+=1;
                    return <TiStarFullOutline className={i <= (hover || ratings) ? `${styles.active}` : `inactive`} key={i} size={15} onClick={()=>handleClick(i,ele.id)}
                    onMouseEnter={()=>handleMouseEnter()}/>
                })
            }
       </div>
    )
}
export default Star;