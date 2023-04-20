import React, { useEffect, useState } from 'react'
import '../styles/About.css';
import ResumePopup from './ResumePopup';
import ImagePopup from './ImagePopup';
import {pageImages} from "../Assets/images.js";
import "../styles/ImagePopup.css";
import { connect } from 'react-redux';
import { getBiography } from '../actions/admin/userActions';
import Text from './admin/Text';

function About({biography, getBiography}) {

    useEffect(()=>{
        getBiography(1)
    },[getBiography])

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
            <h2>ABOUT ME</h2>
            {/* <Text /> */}
            {/* <p>{biography}</p> */}
  
                <p>
                    Dayana Morales is a Venezuelan bilingual stage and screen actress, last seen playing Eurydice in <i>Polaroid Stories</i> at Studio One Theatre FAU. She discovered her love for acting while studying journalism and decided to leave her country to train herself and pursue her passion. She is working towards her BFA in Acting from Florida Atlantic University and has a background in modern dance, contemporary dance and pole dance. She has training in Droznin Russian Movement with the National Theater Institute and Stage Combat with the Society of American Fight Directors. 
                </p>
                <p>
                    Credits Include: Delivery Person in <i>Red Riding Hood</i> (TheatreLab), <i>ShortCuts Tour</i> (CityTheatre Miami), Mimi in <i>RENT </i>(FAU's Festival Repertory) <i>Highlights from Romeo and Juliet</i> and <i>A Midsummer Night's Dream</i> (Shakespeare Troupe), <i>The Office "A Lo Miami"</i> (Microtheater Miami), <i>Prelude 2100</i> (Miami Live Arts-Deering Estate), Thea in <i>Hedda Gabler</i> (Florida Atlantic University) and Antonia in <i>Twelfth Night</i> (PalmBeach Shakespeare)    
                </p>
        
                
            <button className="resume-button"onClick={() => setPopup(!popup)}>Full Resume</button>
        </div>
    
        {popup?<ResumePopup popup={popup} setPopup={setPopup}/>:null}

        {ImgPopup?<ImagePopup popup={ImgPopup} setPopup={setImgPopup} image={popupImage}/>:null}
    </div>
  )
}

const mapStateToProps = state => {
    return {
        biography : state.userReducer.biography
    }
}

export default connect(mapStateToProps, {getBiography})(About)