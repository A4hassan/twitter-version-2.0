import React, { useEffect, useState } from 'react';
import "./Notifications.css";

const Notifications = () => {

  let apikey = process.env.apikey;
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c4c7f24ae24045b4ae4cb25e07589561`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  }

  useEffect(() => {
    updateNews();
  });

  return (

    <div>
      <h2 className='sub_heading'>Notifications</h2>
      <div>
        <h1 className='heading'>All</h1>
      </div>
      <div className='noti_tweet'>
      {articles.map((element) => {
        return (
          <>
            <div className="noti_article" key={element.id}>
              <div className='noti_name'>
                <strong>{element.title}</strong>
              </div>
              <div className='author'>{element.author}</div>
            </div>
          </>
        );
      })}
      </div>
    </div>
  );
};

export default Notifications