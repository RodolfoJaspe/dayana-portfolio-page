import React from 'react';
import resume from '../Assets/resume.pdf';
import "../styles/ResumePopup.css";
import closeBtn from "../Assets/icons/close.png";
import pdf from "../Assets/icons/pdf.png";
import resumeImg from "../Assets/resume.jpg";

function ResumePopup({popup, setPopup}) {
  return (
    <div className='resume-popup-outer'>
        <div className='resume-image-inner'>
            <img src={resumeImg} alt="resume" className='resume-img'/>
            <button 
                className='resume-popup-button'
                onClick={() => setPopup(!popup)}><img src={closeBtn} alt="close button" />
            </button>
        </div>
        <div className='download-resume-outer'>
            <div className='download-resume'>
                <a href={resume} target="_blank">Download</a> 
                <img src={pdf} alt="pdf icon"/>
            </div>
        </div>
    </div>
  )
}

export default ResumePopup