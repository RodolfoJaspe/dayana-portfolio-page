import React,{useState} from 'react'
import '../styles/Gallery.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from './Carousel';
import Slider from './Slider';
import {headshotImages, onSet, onStage} from "../Assets/images.js";
import ImagePopup from './ImagePopup.js';

function Gallery() {

    const [popup, setPopup] = useState(false)
    const [popupImage, setPopupImage] = useState("")

    const triggerPopup = (image) => {
        setPopup(!popup)
        setPopupImage(image)
    }

  return (
    <div className='gallery'>
        <div className='carousel-outer'>
            <h2>On Set</h2>
            <Carousel images={onSet} triggerPopup={triggerPopup}/>            
        </div>
        <div className='carousel-outer'>
            <h2>On Stage</h2>
            <Carousel images={onStage} triggerPopup={triggerPopup}/>    
        </div>
        <div className='slider-outer'>
            <div className='slider-inner'>
                <Slider images={headshotImages} triggerPopup={triggerPopup} singleImage={true}/>   
            </div> 
        </div>
        {popup?<ImagePopup popup={popup} setPopup={setPopup} image={popupImage}/>:null}
    </div>
  )
}

export default Gallery