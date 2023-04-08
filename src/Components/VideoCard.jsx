import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/VideoCards.css";

function VideoCard({
  VideoSrc,
  subs,
  image,
  title,
  channel,
  views,
  timestamp,
  channelImg,
  thumbnailVideo,
  theme
}) {
  const [isClicked, setisClicked] = useState(false);
  function handelClick() {
    setisClicked(true);
  }

  function handelHover() {
    setisClicked(!isClicked);
  }
  // {pathname : `/youtube/${VideoSrc.split("/")[4]}` , state : {data : "hellosiri"}}
  //
  return (
    <div
      className="videoCard"
      onMouseOver={handelClick}
      onMouseOut={handelHover}
    >
      <Link
        to={`/youtube/${VideoSrc.split("/")[4]}`}
        state={{
          data: { title, channel, subs: subs, views, channelImg, timestamp },
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        {isClicked ? (
          <video src={thumbnailVideo} width={245} height={163} style={{objectFit:"fill"}}  autoPlay muted />
        ) : (
          <img className="videoCard_thumbnail" src={image} alt="" />
        )}
        <div className="video_info">
          <Avatar className="videoCard_avatar" alt={channel} src={channelImg} />
          <div className="videoCard_text">
            <h4 style={{color : theme === "black" ? "white" : "black"}}>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} &#8226; {timestamp}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;
