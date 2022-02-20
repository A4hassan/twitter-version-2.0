import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sidebar from "../SidebarCompo/Sidebar";
import "./Home.css";
import Main from "../Main/Main";
import Explore from "../Explore/Explore";
import Profile from "../Profile/Profile";
import Notifications from "../Notifications/Notifications";
import Bookmarks from "../Bookmarks/Bookmarks";
import Lists from "../Lists/Lists";
import Messages from "../Messages/Messages";

const Home = () => {
  return (
    <div className='home'>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/home">
            <Main />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/Notifications">
            <Notifications />
          </Route>
          <Route exact path="/Messages">
            <Messages />
          </Route>
          <Route exact path="/Bookmarks">
            <Bookmarks />
          </Route>
          <Route exact path="/Lists">
            <Lists />
          </Route>
        </Switch>
      </Router>

    </div>
  )
};

export default Home;
