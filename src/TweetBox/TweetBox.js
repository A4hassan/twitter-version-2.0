import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "../firebase";

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
     e.preventDefault();

     db.collection("posts").add({
         displayName: "Hassan",
         username: "4AL HassAn",
         verified: true,
         text: tweetMessage,
         image: tweetImage,
         avatar:"https://pbs.twimg.com/profile_images/1406274463264645126/7s9GUSpa.jpg",

     });
     setTweetMessage("");
     setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1406274463264645126/7s9GUSpa.jpg" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?" type="text" />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL" 
                    type="text" />


                <Button onClick={sendTweet} type="submit" className="tweetBox__TweetButton">Tweet</Button>

            </form>

        </div>
    );
}

export default TweetBox;
