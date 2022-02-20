import React from 'react';
import "./Bookmarks.css";

const Bookmarks = () => {
    return (
        <div>
            <h1 className='book'>Bookmarks</h1>
            <h2 className='user_name'>@4AL_HassAn</h2>
            <span>
                <h4 className='tweet_book'>You have not added any
                    Tweets to your Bookmarks yet</h4>
                <h6 className='book_sub'>When you do they will show up here</h6>
            </span>
        </div>
    );
};

export default Bookmarks