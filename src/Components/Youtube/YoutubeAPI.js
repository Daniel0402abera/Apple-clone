import React, { useState, useEffect } from "react";
import "../../css/bootstrap.css";

// key = AIzaSyA-lj-d_m9pySaJL7TT8wl04wwwN53DSHI

// id = UCE_M8A5yxnLfW0KghEeajjw

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyA-lj-d_m9pySaJL7TT8wl04wwwN53DSHI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8

// https://www.googleapis.com/youtube/v3/channels?key=AIzaSyA-lj-d_m9pySaJL7TT8wl04wwwN53DSHI&forUsername=apple&part=id

function YoutubeAPI() {
  let [youTubeVideos, setResponseData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDjFtReN6sH1Mm2ie9u4p6TChcECAtpHxI &channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data.items);
        console.log(data.items);
      });
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>

          {youTubeVideos.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );

            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeAPI;
