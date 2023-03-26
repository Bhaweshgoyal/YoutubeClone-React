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
          <iframe
            width={250}
            height={170}
            src={`${VideoSrc}`}
            allow="autoplay"
            frameBorder="0"
            title={title}
            allowFullScreen
            loading="lazy"
          ></iframe>
        ) : (
          <img className="videoCard_thumbnail" src={image} alt="" />
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
      </Link>
    </div>
  );
}

export default VideoCard;
