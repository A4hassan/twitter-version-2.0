import React, { useState, useEffect } from 'react';
import "./ExploreKeywords.css";

const Explorekeywords = () => {
  let apikey = process.env.apikey;
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c4c7f24ae24045b4ae4cb25e07589561`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  }

  useEffect(() => {
    updateNews();
  });


  return (
    <div className='img_trend'>
      <div>
        <img style={{ width: '100%', height: '100%' }} alt="..." src='https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/02/0/0/peloton-2-15-22-xx.jpg?ve=1&tl=1' />
      </div>
      <div className='keyword_heading'>
        <h4>Trends For You</h4>
      </div>
      {articles.map((element) => {
        return (
          <>
            <div className="trend" key={element.id}>
              <div className='keyword_name'>
                <strong>{element.title}</strong>
              </div>
              <div className='author'>{element.author}</div>
              <div className='keyword_trending'>Trending...</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Explorekeywords;
