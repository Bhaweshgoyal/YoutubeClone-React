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
      <VideoRow
        views="8.3K"
        subs="237M"
        description="Super Dancer, is a popular children's dance reality show. Celebrating it's 4th edition with the viewers. The season is spearheaded by Bollywood actress Shilpa Shetty, renowned choreographe..."
        timestamp="1 hr ago"
        channel="T-Series"
        title="Super Dancer (Chapter 4) Nachpan Ka Tyohaar |Sundra Sundra In Semi Classical | Suniel Shetty Special"
        image="https://i.ytimg.com/vi/8xbe1Pmrk7Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdg2W-4O_8NxN0681YSNqdm-xDfg"
      />
      <VideoRow
        views="8.7M"
        subs="237M"
        description="बन जाओ साहिब-ए-मसनद, ओ तमाशबीनों गुनाह इश्क़ का है, सज़ा मुहब्बत से देना... "
        timestamp="4 days ago"
        channel="T-Series"
        title="Dotara (Video) Jubin Nautiyal, Mouni Roy, Payal Dev | Darsh Kothari,Vayu, BLM Studios| Bhushan Kumar"
        image="https://i.ytimg.com/vi/gNVC5olXqpU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2YNUCUgxwUu6GRkUbBuJinf0ZHA"
      />
      <VideoRow
        views="289M"
        subs="237M"
        description="Naacho Naacho - Full Video from #RRRMovie.  An  M. M. Kreem  Musical. Sung  by  Vishal Mishra & Rahul Sipligunj...."
        timestamp="11 months ago"
        channel="T-Series"
        title="Naacho Naacho (Full Video) RRR - NTR, Ram Charan | M M Kreem | SS Rajamouli | Vishal Mishra & Rahul"
        image="https://i.ytimg.com/vi/sAzlWScHTc4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4U8HEL9pKm0zxoQiHbLf0mtt57A"
      />
      <VideoRow
        views="11M"
        subs="237M"
        description="Gumraah, produced by Bhushan Kumar, Murad Khetani, Krishan Kumar and Anjum Khetani under the banner of T-Series and Cine 1 Studios, is scheduled to hit the screens on 7th APRIL 2023"
        timestamp="2 days ago"
        channel="T-Series"
        title="Gumraah (Official Trailer) Aditya Roy Kapur, Mrunal Thakur | Vardhan Ketkar | Murad K, Bhushan Kumar"
        image="https://i.ytimg.com/vi/E7APBBJG34E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqrHcNmcnBZp-fA9FW27NsV0MwKQ"
      />
      <VideoRow
        views="1.9M"
        subs="237M"
        description="Presenting the song #NeverTogether by Manan Bhardwaj..."
        timestamp="1 day ago"
        channel="T-Series"
        title="Never Together (Video) Manan Bhardwaj, Yesha Sagar | Savio Sandhu | Bhushan Kumar"
        image="https://i.ytimg.com/vi/Z1Uidozexjo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh-znaILlrwRNcfCSs328sKcKm9w"
      />
      <VideoRow
        views="32M"
        subs="237M"
        description={`Presenting the song "Malang Sajna" by the new age sensation duo "Sachet-Parampara" `}
        timestamp="3 months ago"
        channel="T-Series"
        title="Malang Sajna (Video) Sachet-Parampara | Adil Shaikh, Kumaar | Bhushan Kumar"
        image="https://i.ytimg.com/vi/UbMgcdmYC70/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3KZrrBZBTibWsN1dW-qoCym5y8w"
      />
      <VideoRow
        views="310M"
        subs="5.63M"
        description="A story of two hearts as they navigate through the beautiful yet painful journey of love together. #MaanMeriJaan from the album Champagne Talk is all yours now!.."
        timestamp="5 months ago"
        channel="King"
        title="Maan Meri Jaan | Official Music Video | Champagne Talk | King"
        image="https://i.ytimg.com/vi/VuG7ge_8I2Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSBtShhdREhcebYBHI35OM2ZUZGg"
      />
    </div>
  );
}

export default SearchPage;
