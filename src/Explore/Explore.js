import React from 'react';
import "./Explore.css";
import Explorekeywords from '../ExploreKeywords/ExploreKeywords';

const Explore = () => {
  return (
    <div className='explore'>
      <div className='explore_search'>
        <input
          type="text"
          className="explore_control"
          placeholder='Search Twitter' />
      </div>
      <Explorekeywords/>
    </div>
  );
};

export default Explore;
