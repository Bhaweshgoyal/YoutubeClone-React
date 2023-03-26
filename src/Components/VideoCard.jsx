import { Avatar } from "@mui/material";
import React from "react";
import "../css/VideoCards.css";
function VideoCard({ image, title, channel, views, timestamp, channelImg }) {
  return (
    <div className="videoCard">
      <img className="videoCard_thumbnail" src={image} alt="" />
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
