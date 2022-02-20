import React from 'react';
import "./Messages.css";

const Messages = () => {
  return (
    <div className='msgs'>Messages

      <div className='msgs_search'>
        <input
          type="text"
          className="msgs_control"
          placeholder='Search Twitter' />
      </div>
      <h1 className='msgs_2'>Your messages will pop up here</h1>
    </div>
  );
};

export default Messages