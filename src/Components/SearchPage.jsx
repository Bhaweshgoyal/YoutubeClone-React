import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import React from "react";
import "../css/SearchPage.css";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h6>FILTER</h6>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="T-Series"
        verified
        subs="297M"
        noOfVideos="785K"
        description="Presenting this Years biggest content Released!!🎇 🎉 This Playlist is specially curated for our biggest and favourite fans, Enjoy and do let us know in the comments section."
      />

      <hr />
      <VideoRow />
    </div>
  );
}

export default SearchPage;
