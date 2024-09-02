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
    
        setTargetId(id);
        setShowModel(true)
    }
    const handleClose = ()=>{
        
        let addFeedBack = allList.map((ele)=>{
            if(ele.id === targetId){
                ele.fb = feedBack;
                return {...ele};
            }else return ele;
            
        })
      
        console.log(addFeedBack,'my feed back has added');
        setFeedBack('');
        
        setShowModel(false);

    }
    return(
        
        <div className='mainDiv' > 
          <Header/>
          <BotContent handleShow={handleShow} handleClose={handleClose}/>
          <Search />
       </div>
        
    )
}
export default Home;