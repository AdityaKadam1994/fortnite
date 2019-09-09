import React, { useState, useEffect } from "react";

function Home() {
  useEffect(() => {
    getNews();
  }, []);
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(true);

  const getNews = async () => {
    const response = await fetch(
      "https://fortnite-api.theapinetwork.com/br_motd/get",
      {
        method: "GET",
        headers: { Authorization: "9f4f414cd34a145f5b1571fa6cc42412" }
      }
    );
    const responseData = await response.json();
    setLoad(false);
    setNews(responseData.data);
    // console.log(responseData.data);
  };

  return (
    <div className="full-box news-box">
      {load ? (
        <h1>Loading...</h1>
      ) : news ? (
        news.slice(0, 10).map(news => (
          <div className="external-news-wrapper" key={news.title}>
            <h3 className="news-head">{news.title}</h3>
            <img src={news.image} alt={news.title} className="news-image" />
            <p className="news-description">{news.body}</p>
          </div>
        ))
      ) : (
        <div>No Data Found </div>
      )}
    </div>
  );
}

export default Home;
