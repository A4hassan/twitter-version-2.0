import React from "react";
import { Link } from "react-router-dom";
import { BookmarkBorder, Home, ListAlt, MailOutline, NotificationsNone, PermIdentity, Search, Twitter } from "@material-ui/icons";
import SidebarOption from "../Sidebaroptions/SidebarOption";
import "./Sidebar.css";
import { Button } from "@material-ui/core";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Twitter className="sidebar__twitter" />
            <Link className="nav-link" to="/Home">
                <SidebarOption Icon={Home} text="Home" />
            </Link>
            <Link className="nav-link" to="/explore">
                <SidebarOption Icon={Search} text="Explore" />
            </Link>
            <Link className="nav-link" to="/Profile">
            <SidebarOption Icon={PermIdentity} text="Profile" />
            </Link>
            <Link className="nav-link" to="/Notifications">
            <SidebarOption Icon={NotificationsNone} text="Notifications" />
            </Link>
            <Link className="nav-link" to="/Messages">
            <SidebarOption Icon={MailOutline} text="Messages" />
            </Link>
            <Link className="nav-link" to="/Bookmarks">
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
            </Link>
            <Link className="nav-link" to="/Lists">
            <SidebarOption Icon={ListAlt} text="Lists" />
            </Link>


            <Button variant="outlined" className="sidebar__tweet">Tweet</Button>
        </div>
    );
}

export default Sidebar;