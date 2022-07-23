import React,{useState} from 'react';
import "../../styles/admin/AdminVideos.css";
import YoutubeEmbed from '../YoutubeEmbed';

export default function AdminVideos({videos, addVideo, user_id, deleteVideo}) {

    const [newVideo, setNewVideo] = useState({
        title:'',
        url:'',
        user_id: user_id
    });

    const formSubmit = e => {
        e.preventDefault()
        addVideo(newVideo)
    }

    const inputChanges = e => {
        e.persist();
        setNewVideo({
          ...newVideo,
          [e.target.name]: e.target.value,
        });
      };

  return (
    <div className='admin-videos-outer'>
        <div className='admin-videos-form'>
            <form onSubmit={formSubmit}>
                <input type='text' id='title' name='title' placeholder='video title' value={newVideo.title} onChange={inputChanges}/>
                <input type='text' id='url' name='url' placeholder='video url' value={newVideo.url} onChange={inputChanges}/>
                <button>Add</button>
            </form>
        </div>
        <div className='admin-video-list'>
            {videos?videos.map(video => (
                <div className='video-div'>
                    <YoutubeEmbed embedId={video.url} key={video.id}/>
                    <button onClick={()=>deleteVideo(video.id)}>Delete</button>
                </div>
            )):null}
        </div>
    </div>
  )
}
