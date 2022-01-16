import React, { useRef, useState } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
function VideoCard() {
    const[isVideoPlaying,setIsVideoPlaying]=useState(false);
    const videoRef=useRef(null);
    const onVideoPress=() =>{
        if(isVideoPlaying)
        {
            //set to paused state
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
        else{
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }
    return (
        <div className="videoCard">
            <VideoHeader/>
            <video 
            ref={videoRef}
            onClick={onVideoPress}
            className="video_player"
            src="http://techslides.com/demos/sample-videos/small.webm"
            alt="ig reel video"
            loop
            />
          <VideoFooter/>
        </div>
    )
}

export default VideoCard
