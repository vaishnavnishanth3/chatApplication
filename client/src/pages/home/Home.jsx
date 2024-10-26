// import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
  return (
    <div className="flex gap-4 sm:h-[450px] md:h-[90vh] rounded-lg overflow-hidden bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0" style={{width: "100%"}}>
        <Sidebar />
        <MessageContainer />
    </div>
  )
}

export default Home 
