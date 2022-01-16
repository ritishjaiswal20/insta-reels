import React from 'react'
import './VideoHeader.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
function VideoHeader() {
    return (
        <div className="video_header"> 
            <ArrowBackIosIcon/>
           <h3>Reels</h3>
           <CameraAltIcon/>
        </div>
    )
}

export default VideoHeader
