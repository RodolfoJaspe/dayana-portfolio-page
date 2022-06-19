import React from 'react';
import '../styles/Videos.css';
import {videos} from "../Assets/videos.js";
import YoutubeEmbed from "./YoutubeEmbed";

function Videos() {
  return (
    <div className='videos'>
        <div className='videos-list'>
            {videos.map(video => 
                <YoutubeEmbed embedId={video} key={video}/>
            )}
        </div>
    </div>
  )
}

export default Videos