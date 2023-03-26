import { Avatar } from "@mui/material";
import React, {useState} from "react";
import "../css/VideoCards.css";
function VideoCard({VideoSrc, image, title, channel, views, timestamp, channelImg }) {
 const [isClicked, setisClicked] = useState(false)
  function handelClick (){
    setisClicked(true);
  }

  return (
    <div className="videoCard" onClick={handelClick}>
      {isClicked ? <iframe width= {250} height={170} src={`${VideoSrc}`+"?autoplay=1"} allow='autoplay' frameborder="0"></iframe>: <img className="videoCard_thumbnail" src={image} alt="" />}
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
