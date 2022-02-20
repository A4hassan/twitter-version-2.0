import { Avatar } from "@material-ui/core";
import { ChatBubbleOutline, FavoriteBorderOutlined, Publish, Repeat, VerifiedUser, } from "@material-ui/icons";
import React, { forwardRef } from "react";
import "./Post.css";

const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUser className="post__badge" />} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text} </p>
                    </div>
                </div>
                <img
                    src={image}
                    alt=""
                />
                <div className="post__footer">
                    <span><ChatBubbleOutline />30</span>
                    <span><Repeat />12</span>
                    <span><FavoriteBorderOutlined />115</span>
                    <span><Publish />17</span>
                </div>
            </div>
        </div>
    );
});

export default Post;
