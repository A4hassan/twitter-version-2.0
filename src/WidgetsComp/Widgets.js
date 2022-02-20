import React from "react";
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";


const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1445858293163782147"}
                />

                <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="4AL_HassAn"
                options={{ height: 400 }}      
                />

                <TwitterShareButton 
                url={"https://www.facebook.com/me/"}
                options={{Text: "reactjs is fantastic", via: "Nitrate"}}
                />
            </div>
        </div>
    );
}

export default Widgets;
