import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faAlignCenter,
    faAlignJustify,
    faAlignLeft,
    faAlignRight,
    faBold,
    faItalic,
    faRotateLeft,
    faRotateRight,
    faStrikethrough,
    faUnderline,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addHeadshot, deleteHeadshot, getHeadshots } from '../../actions/admin/headshotsActions.js';
import { addOnset, deleteOnset, getOnset } from '../../actions/admin/onsetActions.js';
import { addOnstage, deleteOnstage, getOnstage } from '../../actions/admin/onstageActions.js';
import { addVideo, deleteVideo, getVideos } from '../../actions/admin/videosActions.js';
import '../../styles/admin/Dashboard.css';
import AdminImages from './AdminImages.js';
import AdminVideos from './AdminVideos.js';
import { Editor } from './Editor';
import Resume from './Resume.js';
import Text from './Text.js';

library.add(
  faBold,
  faStrikethrough,
  faItalic,
  faUnderline,
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
  faAlignJustify,
  faRotateLeft,
  faRotateRight
);

function Dashboard({
    user,
    user_id, 
    headshots, 
    onset, 
    onstage, 
    videos, 
    biography,
    addHeadshot,
    addOnset,
    addOnstage,
    addVideo,
    getHeadshots,
    getOnset,
    getOnstage,
    getVideos,
    deleteHeadshot,
    deleteOnset,
    deleteOnstage,
    deleteVideo
    }) {

    useEffect(()=> {
        getHeadshots(user_id)
        getOnset(user_id)
        getOnstage(user_id)
        getVideos(user_id)
    },[getHeadshots, getOnset, getOnstage, getVideos])


  return (
    <div className='dashboard'>
        <h2>Headshots</h2>
        <AdminImages images={headshots} addImage={addHeadshot} user_id={user_id} deleteImage={deleteHeadshot}/>
        <h2>On Set</h2>
        <AdminImages images={onset} addImage={addOnset} user_id={user_id} deleteImage={deleteOnset}/>
        <h2>On Stage</h2>
        <AdminImages images={onstage} addImage={addOnstage} user_id={user_id} deleteImage={deleteOnstage}/>
        <h2>Videos</h2>
        <AdminVideos videos={videos} addVideo={addVideo} user_id={user_id} deleteVideo={deleteVideo}/>
        <h2>About</h2>
        <Resume />
        <Editor />
        <Text />
    </div>
  )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer,
        user_id : state.userReducer.user_id,
        headshots : state.userReducer.media.images.headshots,
        onset : state.userReducer.media.images.onset,
        onstage : state.userReducer.media.images.onstage,
        videos : state.userReducer.media.videos,
        biography : state.userReducer.biography
    }
}

export default connect(mapStateToProps, {addHeadshot, addOnset, addOnstage, addVideo, getHeadshots, getOnset, getOnstage, getVideos, deleteHeadshot, deleteOnset, deleteOnstage, deleteVideo})(Dashboard)