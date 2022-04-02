import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './Comp/Navbar';
import Header from './Comp/Header';
import Menubar from './Comp/Menubar';
import ProfileCard from './Comp/ProfileCard';
import AppointMent from './Comp/AppointMent';

import Notes from './Comp/Notes';
import Document from './Comp/Document';

function App() {
  return (
    <div className=" maincard bg-[#F2F5FA] mx-auto  rounded-xl h-screen flex  ">
      <Navbar />
      <div className="w-full">
        <Header />
        <Menubar />
        {/* <div className="p-3 w-full bg-[#F2F5FA] flex h-80 overflow-x-hidden  scrooling overflow-y-scroll">
           <ProfileCard /> 
        </div> */}
        <div className="grid grid-cols-2 gridwidth gap-5 mt-3 ml-3  overflow-y-scroll ">
          <div >
            <ProfileCard /> 
          </div>  
          <div>
            <Notes/>
          </div>
          <div>
            <AppointMent /> 
          </div>
           <div>
            <Document/>
          </div> 
         
       </div>
       </div>
       
    </div>
  );
}

export default App;
