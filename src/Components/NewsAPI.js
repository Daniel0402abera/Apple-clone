import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Api = https://newsapi.org/v2/everything?q=apple&from=2022-12-06&to=2022-12-06&sortBy=popularity&apiKey=d7c17a52a620428aa29ff5235fd57f55

function NewsAPI() {
  let [youTubeVideos, setResponseData] = useState([]);

  useEffect(() => {
    const data = fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2022-12-06&to=2022-12-06&sortBy=popularity&apiKey=d7c17a52a620428aa29ff5235fd57f55&pageSize=2"
    )
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data.articles);
        console.log(data.articles);
      });
  }, []);

  return (
    <div className="container">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-12 my-5">
          <div className="title-wraper bold ">Latest News</div>
        </div>

        {youTubeVideos.map((singleNews, i) => {
          let author = singleNews.author;
          let img = singleNews.urlToImage;
          let newUrl = singleNews.url;

          let NewsWrapper = (
            <div key={i} className="col-sm-12 col-md-6 my-2">
              <div className="col-sm-12 col-md-6">
                <img
                  className="mx-auto img-fluid"
                  style={{
                    className: "img-fluid",
                    style: "max-width: 100%",
                    height: "auto",
                  }}
                  src={img}
                  alt=""
                />
              </div>

              <div className="h6 my-2">{singleNews.title}</div>
              <div className="">{singleNews.description}</div>
              <div className="my-3">
                <a href={newUrl} target="_blank">
                  Read More
                </a>
              </div>

              <div className="my-4">
                <span className="h6">Author: </span>
                {author}
              </div>
            </div>
          );

          return NewsWrapper;
        })}
      </div>
    </div>
  );
}

export default NewsAPI;
