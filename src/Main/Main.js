import React from 'react';
import Feed from '../FeedComp/Feed';
import Widgets from '../WidgetsComp/Widgets';

const Main = () => {
  return (
    <div className="d-flex flex-fill">
        <Feed/>
        <Widgets/>
    </div>
  );
};

export default Main