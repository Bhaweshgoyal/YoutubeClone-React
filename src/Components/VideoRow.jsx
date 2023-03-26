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
      <img src={image} alt="" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p>
          {channel} &#8226; {subs} Subscribers {views} &#8226; {timestamp}
        </p>
        <p>
            {description}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;
