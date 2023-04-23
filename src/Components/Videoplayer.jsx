import React from "react";
import { useLocation } from "react-router-dom";
import "../css/VideoPlayer.css";
import VideoListComponentCard from "./videoListComponentCard";
function Videoplayer({theme}) {
  const data = useLocation();
  let VideoSrc = "https://www.youtube.com/embed/";
    
  VideoSrc += data.pathname.split("/")[2] + "?autoplay=1"; 

  return (
    <div className="videoPlayer" style={{backgroundColor :theme}} >
      <div className="videoFrame">
        <div className="videoPlayer_iframe" >
          <iframe
            style={{border: "2px solid white" , borderRadius :"10px"}}
            width={700}
            height={440}
            src={`${VideoSrc}`}
            allow="autoplay"
            frameBorder = "0"
            title={data.state.data.title}
            allowFullScreen
          ></iframe>
        </div>
        <div className="videoPlayer_info" >
            <div className="videoPlayer_title">
            {data.state.data.title}
            </div>
        </div>
        {/* The Most Underrated Companies To Follow In The Education Industry, A Step-by-Step Guide To Education, What's The Current Job Market For Education Professionals Like?, Education Of The Year, The Biggest List Of Education */}
      </div>
      <div className="videoPlayer_list">
      <VideoListComponentCard theme= {theme} imgsrc={"https://www.linkpicture.com/q/3zrq3LPbIao-MQ.jpg"}  heading= {" Mafia Music 2023 ☠️ Best Gangster Rap Mix - Hip Hop & Trap Music 2023 #51"} channelname= {"Xo VibeMine"} views={"15k"} days={"6 days ago"}/>
      <VideoListComponentCard theme= {theme} imgsrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFrVS9ElGtuGjeN6OOrZIvVlPqnj33FFv8g&usqp=CAU"}  heading= {" How To Make Professional Thumbnails For 🔥...."} channelname= {"Aksh Verma"} views={"3.6M"} days={"2 years ago"}/>
      <VideoListComponentCard theme= {theme} imgsrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfz0UUe8hHrCGlGGl9f2Wb6zU-Uv23t35G7w&usqp=CAU"}  heading= {"I Reviewed 400 Thumbnails to Prove ...."} channelname= {"Channel Maker"} views={"206K"} days={"1 year ago"}/>
      <VideoListComponentCard theme= {theme} imgsrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKwB5gM9om31TaPr6gu-MGT1q0izK2MA37jw&usqp=CAU"}  heading= {"Raiding and Gifting thumbnails to streamers ! Check pinned message"} channelname= {"harsh Khelraay"} views={"78K"} days={"4 minutes ago"}/>
      <VideoListComponentCard theme= {theme} imgsrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJidcmpjDuAa35u-DIOpX3_hL1wSDJ7I2Iw&usqp=CAU"}  heading= {" The Ugly Truth About Education,10 Biggest Misconceptions About Education "} channelname= {"Xo VibeMine"} views={"15k"} days={"6 days ago"}/>
      <VideoListComponentCard theme= {theme} imgsrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLj0VSobkuVqksclFxRh6rUDYz-XnVdyDZMA&usqp=CAU"}  heading= {" What's The Current Job Market For Education Professionals Like?"} channelname= {"Xo VibeMine"} views={"15k"} days={"6 days ago"}/>
      <VideoListComponentCard theme= {theme} imgsrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_FkoCZdbIQ6b7d_gzbvMbQRiQPA6aY9Vtg&usqp=CAU"}  heading= {" Education Of The Year, The Biggest List Of Education...."} channelname= {"Xo VibeMine"} views={"15k"} days={"6 days ago"}/>
      {/* <VideoListComponentCard theme= {theme} imgsrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLieArmx6WWoxw1fO_PB_3uNYYyHVFYUB01g&usqp=CAU"}  heading= {" Things Your Parents Did Not Teach You About Education...."} channelname= {"Xo VibeMine"} views={"15k"} days={"6 days ago"}/>  */}
    </div>
    </div>
  );
}

export default Videoplayer;
