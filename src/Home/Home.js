import React from "react";
import Sidebar from "../SidebarCompo/Sidebar";
import Feed from "../FeedComp/Feed";
import Widgets from "../WidgetsComp/Widgets";
import "./Home.css";
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  )
};

export default Home;
