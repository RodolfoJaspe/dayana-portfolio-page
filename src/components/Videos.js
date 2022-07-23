import React, { useEffect } from 'react';
import '../styles/Videos.css';
import YoutubeEmbed from "./YoutubeEmbed";
import { getVideos } from '../actions/admin/videosActions';
import { connect } from 'react-redux';

function Videos({getVideos,videos}) {

    useEffect(()=>{
        getVideos(1)
    },[getVideos])
  return (
    <div className='videos'>
        <div className='videos-list'>
            {videos.map(video => 
                <YoutubeEmbed embedId={video.url} key={video.id}/>
            )}
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        videos: state.userReducer.media.videos
    }
}
export default connect(mapStateToProps, {getVideos}) (Videos)