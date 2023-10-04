import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import closeBtn from "../Assets/icons/close.png";
import pdf from "../Assets/icons/pdf.png";
import { getResume } from '../actions/admin/userActions';
import "../styles/ResumePopup.css";

function ResumePopup({popup, setPopup, getResume, resume_img, resume_pdf}) {

    useEffect(() => {
        getResume(1)
    },[getResume])
    
  return (
    <div className='resume-popup-outer'>
        <div className='resume-image-inner'>
            <img src={resume_img} alt="resume" className='resume-img'/>
            <button 
                className='resume-popup-button'
                onClick={() => setPopup(!popup)}><img src={closeBtn} alt="close button" />
            </button>
        </div>
        <div className='download-resume-outer'>
            <div className='download-resume'>
                <a href={resume_pdf} target="_blank">Download</a> 
                <img src={pdf} alt="pdf icon"/>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        resume_img: state.userReducer.media.resume.resume_img,
        resume_pdf: state.userReducer.media.resume.resume_pdf
    }
}

export default connect(mapStateToProps, {getResume}) (ResumePopup)