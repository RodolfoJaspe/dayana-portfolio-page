import React, { useState } from 'react';
import { pageImages } from "../Assets/images.js";
import '../styles/About.css';
// import "../styles/ImagePopup.css";
import Text from './admin/Text';
import ResumePopup from './ResumePopup';

function About() {

    const [popup, setPopup] = useState(false)

    // const [ImgPopup, setImgPopup] = useState(false)

    // const [popupImage, setPopupImage] = useState("")

    // const triggerPopup = (image) => {
    //     setImgPopup(!ImgPopup)
    //     setPopupImage(image)
    // }

    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    //   }

    const headshot = pageImages.find(image => image.id === 2)
  return (
    <div className='about'>
        <div className='about-banner-div'>
            <h2>ABOUT ME</h2>
            <Text />                  
            <button className="resume-button"onClick={() => setPopup(!popup)}>Full Resume</button>
            <img 
                className='about-headshot' 
                src={headshot.url} 
                alt='headshot'
                // onClick={() => triggerPopup(headshot)} 
                />
        </div>
            
        {popup?<ResumePopup popup={popup} setPopup={setPopup}/>:null}

        {/* {ImgPopup?<ImagePopup popup={ImgPopup} setPopup={setImgPopup} image={popupImage}/>:null} */}
    </div>
  )
}

export default About