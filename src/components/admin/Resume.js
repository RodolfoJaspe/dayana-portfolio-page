import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { getResume, updateResume } from '../../actions/admin/userActions';
import "../../styles/admin/Resume.css";


function Resume({reducer_img, reducer_pdf, updateResume, getResume}) {
    useEffect(() => {
        getResume(id)
    },[getResume])
    const [resume, setResume] = useState({
        resume_img : '',
        resume_pdf : ''
    })

    const {id} = useParams()

    const inputChanges = (e) => {
        e.persist()
        setResume({
            ...resume, [e.target.name]: e.target.value
        });
    };

    const formSubmit = e => {
        e.preventDefault()
        updateResume(resume, id)
    }

  return (
    <div>
        Resume
        <form onSubmit={formSubmit}>
            <input type='text' id='resume_img' name='resume_img' placeholder='resume image link' value={resume.resume_img} onChange={inputChanges}/>
            
            <input type='text' id='resume_pdf' name='resume_pdf' placeholder='resume pdf link' value={resume.resume_pdf} onChange={inputChanges}/>
            <button>Add</button>
        </form>
        <div className='resume_img_div'>
            <img 
                src={reducer_img} 
                alt='resume image'/>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        reducer_img : state.userReducer.media.resume.resume_img,
        reducer_pdf : state.userReducer.media.resume.resume_pdf,
    }
}

export default connect(mapStateToProps, {updateResume, getResume})(Resume)

