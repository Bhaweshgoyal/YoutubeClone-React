import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Avatar } from "@mui/material";
import React from "react";
import "../css/ChannelRow.css"

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" alt={channel} src={image} />
      <div className="channelRow_text">
        <h4>
          {channel}
          {verified && <CheckCircleRoundedIcon />}
        </h4>
        <p>
          {subs} subscribers &#8226; {noOfVideos} videos
        </p>    
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
