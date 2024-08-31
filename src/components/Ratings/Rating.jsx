import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa6";
import "../Ratings/Ratings.css";
import { aiContent } from "../../App";
const Star = ({ele})=>{
    const {allList} = useContext(aiContent);
    const [ratings,setRatings] = useState(0)
    const [tId,setTId] = useState('');
    const [hover,setHover] = useState(0)

    const handleClick = (curIdx,Id)=>{
        // console.log(curIdx)
        setRatings(curIdx);
        mapRatings(Id)
       

    }
    const handleMouseEnter = (mouseIdx)=>{
        setHover(mouseIdx)
    
    }
    function mapRatings(Id){
        let res = allList.map((ele,i)=>{
            if(ele.id === Id){
                ele.rate = ratings;
                return ele;
            }
            return ele;
        })
        console.log(res,'res')
    }
    return(
        <div>
            {
                [...Array(5)].map((_,i)=>{
                    i+=1;
                    return <FaStar className={i <= (hover || ratings) ? 'active' : 'inactive'} key={i} size={15} onClick={()=>handleClick(i,ele.id)}
                    onMouseEnter={()=>handleMouseEnter()}/>
                })
            }
       </div>
    )
}
export default Star;