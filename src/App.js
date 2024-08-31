
import { createContext, useEffect, useState } from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

// import data from "./mockedData.json";

export let aiContent = createContext();
function App() {
  const [prevData,setPrevData] = useState([]);
  // const [ansQue,setAnsQue] = useState([]);
  const [allList,setAllList] = useState([]);
  const [curAns,setCurAns] = useState([]);
  const [curQue,setCurQue] = useState([]);
  const [ipState,setIpState] = useState('');
  const [showModel,setShowModel] = useState(false);
  const [feedBack,setFeedBack] = useState('');
  const [ratings,setRatings] = useState(0);
  // console.log('data',data);
 
  return (
    <div className="App d-flex">
     <aiContent.Provider value={{prevData,setPrevData,curAns,setCurAns,ipState,setIpState,curQue,setCurQue,allList,setAllList,showModel,setShowModel,feedBack,setFeedBack,ratings,setRatings}}>
      <NavigationBar/>
       <Outlet/>
      </aiContent.Provider>
    </div>
  );
}
export default App;
