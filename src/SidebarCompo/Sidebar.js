import React from "react";
import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter } from "@material-ui/icons";
import SidebarOption from "../Sidebaroptions/SidebarOption";
import "./Sidebar.css";
import { Button } from "@material-ui/core"; 

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Twitter className="sidebar__twitter"/>

            <SidebarOption active Icon={Home} text="Home" />
            <SidebarOption Icon={Search} text="Explore" />
            <SidebarOption Icon={NotificationsNone} text="Notifications" />
            <SidebarOption Icon={MailOutline} text="Messages" />
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
            <SidebarOption Icon={ListAlt} text="Lists" />
            <SidebarOption Icon={PermIdentity} text="Profile" />
            <SidebarOption Icon={MoreHoriz} text="More" />


            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
        </div>
    );
}

export default Sidebar;