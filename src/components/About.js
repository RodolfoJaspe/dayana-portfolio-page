import React, { useState } from 'react'
import '../styles/About.css';
import ResumePopup from './ResumePopup';
import ImagePopup from './ImagePopup';
import {pageImages} from "../Assets/images.js";
import "../styles/ImagePopup.css";

function About() {
    const [popup, setPopup] = useState(false)

    const [ImgPopup, setImgPopup] = useState(false)

    const [popupImage, setPopupImage] = useState("")

    const triggerPopup = (image) => {
        setImgPopup(!ImgPopup)
        setPopupImage(image)
    }

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    const headshot = pageImages.find(image => image.id === 2)
  return (
    <div className='about'>
        <div className='headshot-div'>
          <img onClick={() => triggerPopup(headshot)}src={headshot.url} alt='headshot' />  
        </div>
        <div className='banner-about-div'>
            <h2>About Me</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <button className="resume-button"onClick={() => setPopup(!popup)}>Full Resume</button>
        </div>
    
        {popup?<ResumePopup popup={popup} setPopup={setPopup}/>:null}

        {ImgPopup?<ImagePopup popup={ImgPopup} setPopup={setImgPopup} image={popupImage}/>:null}
    </div>
  )
}

export default About