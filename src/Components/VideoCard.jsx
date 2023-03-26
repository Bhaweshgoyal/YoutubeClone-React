import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "../css/VideoCards.css";
function VideoCard({
  VideoSrc,
  image,
  title,
  channel,
  views,
  timestamp,
  channelImg,
}) {
  const [isClicked, setisClicked] = useState(false);
  function handelClick() {
    setisClicked(true);
  }

  function handelHover() {
    setisClicked(!isClicked);
  }

  return (
    <div
      className="videoCard"
      onClick={handelClick}
      onMouseOver={handelClick}
      onMouseOut={handelHover}
    >
      {isClicked ? (
        <iframe
          width={250}
          height={170}
          src={`${VideoSrc}`}
          allow="autoplay"
          frameborder="0"
          title="myFrame"
          allowFullScreen
          loading="lazy"
        ></iframe>
      ) : (
        <img
          className="videoCard_thumbnail"
          loading="lazy"
          src={image}
          alt=""
        />
      )}
      <div className="video_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImg} />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} &#8226; {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
