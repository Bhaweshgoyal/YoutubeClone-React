import React from "react";
import { useLocation } from "react-router-dom";
import "../css/VideoPlayer.css";
function Videoplayer() {
  const data = useLocation();
  console.log(data , "-------------------")
  let VideoSrc = "https://www.youtube.com/embed/";
    
  VideoSrc += data.pathname.split("/")[2] + "?autoplay=1"; 
  console.log(VideoSrc);
  return (
    <div className="videoPlayer" >
      <div className="videoFrame">
        <div className="videoPlayer_iframe">
          <iframe
            width={740}
            height={440}
            src={`${VideoSrc}`}
            allow="autoplay"
            frameBorder="0"
            title={data.state.data.title}
            allowFullScreen
          ></iframe>
        </div>
        <div className="videoPlayer_info" >
            <div className="videoPlayer_title">
            {data.state.data.title}
            </div>
        </div>
      </div>
      <div className="videoPlayer_list">
      Here the list gone a be come
      </div>
    </div>
  );
}

export default Videoplayer;
