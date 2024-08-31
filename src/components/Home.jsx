import React,{useContext, useState} from "react";
import Header from "../components/Header/Header"
import BotContent from "./BotContent/BotContent";
import Search from "./Search/Search";
import "../App.css"
import { aiContent } from "../App";
// import Feedback from "react-bootstrap/esm/Feedback";
const Home = ()=>{
    const {feedBack,setFeedBack,showModel,setShowModel,allList,setAllList} = useContext(aiContent)
    const [targetId,setTargetId] = useState();
    const handleShow = (id)=>{
        //  console.log(id);
        setTargetId(id)

        setShowModel(true)
    }
    const handleClose = ()=>{
        // console.log(id)
        let addFeedBack = allList.map((ele)=>{
            if(ele.id === targetId){
                ele.fb = feedBack;
                // console.log(feedBack)
                // console.log(ele)
                return {...ele};
            }else return ele;
            
        })
        // setAllList(...addFeedBack)
        // setAllList(addFeedBack)
        console.log(addFeedBack,'my feed back has added');
        setFeedBack('');
        
        setShowModel(false);

    }
    return(
        
        <div className='mainDiv' style={{border:"1px solid blue"}}> 
          <Header/>
          <BotContent handleShow={handleShow}/>
          <Search handleClose={handleClose}/>
       </div>
        
    )
}
export default Home;