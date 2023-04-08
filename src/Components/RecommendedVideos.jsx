// import React from "react";
import VideoCard from "./VideoCard";
import "../css/recomendedVideos.css";
import video1 from "../videoComponent/video1.mp4";
import video2 from "../videoComponent/video2.mp4";
import video3 from "../videoComponent/video3.mp4";
import video4 from "../videoComponent/video4.mp4";
import video5 from "../videoComponent/video5.mp4";
import video6 from "../videoComponent/video6.mp4";
import video7 from "../videoComponent/video7.mp4";
import video8 from "../videoComponent/video8.mp4";
import video9 from "../videoComponent/video9.mp4";
import video10 from "../videoComponent/video10.mp4";
function RecommendedVideos({ theme }) {
  return (
    <div
      className="recommendedVideos"
      style={{
        color: theme === "black" ? "white" : "black",
        backgroundColor: theme,
      }}
    >
      <h2>Recommended</h2>
      <div className="recommendedVideos_video">
        <VideoCard
          theme={theme}
          channelImg="https://yt3.ggpht.com/mhxgIApy5kRlL_Bf-3U0QGcQpDxGAzFWCqy1ubhw5FUf6Z_JkZN6EY3m0MpUxQzqCAGxofgmBw=s68-c-k-c0x00ffffff-no-rj"
          title="Way to Live"
          views="2.7M Views"
          subs="5M"
          timestamp="3 days ago"
          channel="holi-Est"
          thumbnailVideo={video1}
          VideoSrc="https://www.youtube.com/embed/i2m7dY47EB8?autoplay=1&mute=1&enablejsapi=1"
          image="https://i.ytimg.com/vi/i2m7dY47EB8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVTzGU7uZMpT0vTttY7O8T1IJA7Q"
        />
        <VideoCard
          theme={theme}
          channelImg="https://yt3.ggpht.com/b9BV7VRaPtkrzll-8eMkDieZQKgYxpH7cWVmj1ZTm8IuA7SNMH7crBNJCE2A2c7WQP13Gd-r=s68-c-k-c0x00ffffff-no-rj"
          title="Success near to you"
          views="3M Views"
          subs="5M"
          timestamp="3 days ago"
          channel="Vilan Muzik"
          thumbnailVideo={video2}
          VideoSrc="https://www.youtube.com/embed/CHyA3pp4G_Y?autoplay=1&mute=1&enablejsapi=1"
          image="https://i.ytimg.com/vi/CHyA3pp4G_Y/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARh_IEYoKDAP&rs=AOn4CLCmDVh0kwuafL09_kM73aRss-9Dbg"
        />
        <VideoCard
          theme={theme}
          channelImg="https://yt3.ggpht.com/5IhVZsdGrIyCwg3u0ro6MyX4zICtrUkaefm54ak7pm9RSbXCMI3xNkHb9FMULjvtC0LuXjUwF1g=s68-c-k-c0x00ffffff-no-rj"
          title="Its just About IDEA!!"
          views="7M Views"
          subs="5M"
          timestamp="3 days ago"
          channel="VYRL Haryanvi"
          thumbnailVideo={video3}
          VideoSrc="https://www.youtube.com/embed/jXF0sYVu4Nw?autoplay=1&mute=1&enablejsapi=1"
          image="https://i.ytimg.com/vi/jXF0sYVu4Nw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUs27V3n4r5sZKwRkgNHoYd-QVZA"
        />
        <VideoCard
        theme = {theme}
          channelImg="https://yt3.ggpht.com/6SOU4Foz63Vce3hHDaQzs2fY_jUpPPptq_huFv6nw6tsSH5QC-Y2lwmho43O2vsIBy6MViDt2g=s68-c-k-c0x00ffffff-no-rj"
          title="Unlock this world"
          views="17M Views"
          subs="5M"
          timestamp="3 days ago"
          channel="SHUB"
          thumbnailVideo={video4}
          VideoSrc="https://www.youtube.com/embed/JcxVoV1ah78?autoplay=1&mute=1&enablejsapi=1"
          image="https://i.ytimg.com/vi/JcxVoV1ah78/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWMcxNZEaPj0Of5vKXtKWLXh-8jw"
        />
        <VideoCard
        theme = {theme}
          channelImg="https://yt3.ggpht.com/ytc/AL5GRJX7LBvNaQFl0ODpVbrt2F4ajG_wY0fKpZGsEqi8Jw=s68-c-k-c0x00ffffff-no-rj"
          title="Intellectual Growth"
          views="25M Views"
          subs="5M"
          timestamp="3 days ago"
          channel="Endorphin"
          thumbnailVideo={video5}
          VideoSrc="https://www.youtube.com/embed/N14_XNH8Mqs?autoplay=1&mute=1&enablejsapi=1"
          image="https://i.ytimg.com/vi/N14_XNH8Mqs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjpJ3yp-1jYUoJG3pQ7pviaKwY0g"
        />
        <VideoCard
        theme = {theme}
          channelImg="https://yt3.ggpht.com/w7sLANpF1z0o1eiZTmEtpEC413EtIpbCnEcDD9K6Pvqzl5452ZK2b6DDkieOye8ppbuacD3VpA=s68-c-k-c0x00ffffff-no-rj"
          title="Your Passport is here!"
          views="782K Views"
          subs="5M"
          timestamp="3 days ago"
          channel="KaanPhod Music"
          thumbnailVideo={video6}
          VideoSrc="https://www.youtube.com/embed/R8OFOURSZZA?autoplay=1&mute=1&enablejsapi=1"
          image="https://i.ytimg.com/vi/R8OFOURSZZA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmZW_ENJJbx-CGUAOz4bhxPl6inQ"
        />
        <VideoCard
        theme = {theme}
          channelImg="https://yt3.ggpht.com/uL8rBwx21i0bDbhNXqME-gQ_qHNNgDnW-vQ_mtJPDdvZNPABkPaosCggQ4iGWWh_S9comNbftlk=s68-c-k-c0x00ffffff-no-rj"
          title="A Silent Success"
          views="2M Views"
          subs="5M"
          timestamp="3 days ago"
          channel="J STAR Productions"
          thumbnailVideo={video7}
          VideoSrc="https://www.youtube.com/embed/mWZ6b_I-Djg?autoplay=1&mute=1&enablejsapi=1"
          image="https://i.ytimg.com/vi/mWZ6b_I-Djg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmUQOB4J5yrrs_rfSKTG075cLnvA"
        />
        <VideoCard
        theme = {theme}
          channelImg="https://yt3.ggpht.com/E3IJIYRdtoNK5YiGxfuBdwitgr3eFVWuWrmG_T-smqVc_0Ve789BfSrnJT9NCwJCV57GQh5z8QM=s68-c-k-c0x00ffffff-no-rj"
          title="Punctualty to your way"
          views="7M Views"
          subs="5M"
          timestamp="3 days ago"
          channel="𝙈𝙞𝙣𝙚𝙮𝙮"
          thumbnailVideo={video8}
          VideoSrc="https://www.youtube.com/embed/Izts-ynjwxg?autoplay=1&mute=1&enablejsapi=1"
          image="https://i.ytimg.com/vi/Izts-ynjwxg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9JUnXHWMAM_-VmBy8JWpTOBOyPQ"
        />
        <VideoCard
        theme = {theme}
          channelImg="https://yt3.ggpht.com/1i_X6Ixs7JXvy20ZjkQBtVkWJfXp7Aw-GFKWoNw_cMROm9_XMNaacsilxvVEG-7vgNyjao6AOA=s68-c-k-c0x00ffffff-no-rj"
          title="Teacher and green Success"
          views="9M Views"
          subs="5M"
          timestamp="3 days ago"
          channel="Maverick Reverbz"
          thumbnailVideo={video9}
          VideoSrc="https://www.youtube.com/embed/vdMPP47nLhc?autoplay=1&mute=1&enablejsapi=1"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgHEac9FXGp7sFbHi4VR-olW-5w36lZsepA&usqp=CAU"
        />
        <VideoCard
        theme = {theme}
          channelImg="https://yt3.ggpht.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s48-c-k-c0x00ffffff-no-rj"
          title="Sit idle no more go get Education"
          views="211M Views"
          subs="5M"
          timestamp="3 days ago"
          channel="Pradabae"
          thumbnailVideo={video10}
          VideoSrc="https://www.youtube.com/embed/KUM4AECEcUA?autoplay=1&mute=1&enablejsapi=1"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHakb6cJhUAxIps07SRn8HAZjSUouskpgHaw&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
