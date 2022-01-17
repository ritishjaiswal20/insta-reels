import { Avatar, Button } from '@mui/material'
import React from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import './VideoFooter.css'
import Ticker from "react-ticker"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function VideoFooter({avatarSrc,channel,song,likes,shares}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <Avatar src={avatarSrc} />
                <h3>
                    {channel} <Button>Follow</Button>
                </h3>         
            </div>
            <div className="videoFooter_ticker">
               <MusicNoteIcon 
               className="videoFooter_icon"/>
              <Ticker mode="smooth">
                  {({index})=>(
                      <>
                         <h1>{song}</h1>
                      </>
                  )}
                  
              </Ticker>
            </div>
            <div className="videoFooter_actions">
                 <div className="videoFooter_actionLeft">
                        <FavoriteIcon fontSize="large" />
                        <ModeCommentIcon fontSize="large"/>
                        <SendIcon fontSize="large" />
                        <MoreHorizIcon fontSize="large" />
                 </div> 
                 <div className="videoFooter_actionRight">
                     <div className="videoFooter_stat">
                         <FavoriteIcon/>
                         <p>{likes}</p>
                     </div>
                     <div className="videoFooter_stat">
                         <ModeCommentIcon/>
                         <p>{shares}</p>
                     </div>
                 </div> 
            </div>
            
        </div>
    )
}

export default VideoFooter
