import React from 'react'
import "../css/videoListComponentCard.css"
function VideoListComponentCard({days,views,channelname ,imgsrc,heading , theme}) {
    let textColor =  theme == "black" ? "white " : "black"
  return (
    <div className='videoCardList'style={{backgroundColor : theme }} >
        <div className="card" style={{backgroundColor : theme }}>
            <img src={imgsrc} width={170} height={115} alt="" />  
            <div className="description" style={{ color : textColor}}>
            <h6>
            {heading}
            </h6>
            <div>
                <div className="channelname">{channelname}</div>
                <div>{views} views &#8226; {days} </div>
            </div>
            </div>          
        </div>
       
    </div>
  )
}

export default VideoListComponentCard