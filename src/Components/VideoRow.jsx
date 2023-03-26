import React from "react";
import "../css/VideoRow.css";
function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="VideoRow">
      <img src={image} alt="hello " />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {channel} &#8226; {subs} Subscribers {views} &#8226; {timestamp}
        </p>
        <p className="videoRow_description">
            {description}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;
