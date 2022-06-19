import React,{useState} from 'react'
import '../styles/Gallery.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from './Slider';
import {headshotImages, onSet, onStage} from "../Assets/images.js";
import Carousel from "react-slick";
import ImagePopup from './ImagePopup.js';

function Gallery() {

    const [popup, setPopup] = useState(false)
    const [popupImage, setPopupImage] = useState("")

    const triggerPopup = (image) => {
        setPopup(!popup)
        setPopupImage(image)
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                speed: 5000,
                autoplaySpeed: 2000,
                cssEase: "linear",
                centerMode: true,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                dots: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                speed: 5000,
                autoplaySpeed: 2000,
                cssEase: "linear",
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 5000,
                autoplaySpeed: 2000,
                centerMode: true,
                cssEase: "linear",
              }
            }
          ]
      };

      const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
      }

  return (
    <div className='gallery'>
        <div className='carousel-outer'>
            <h2>On Set</h2>
            <Carousel {...settings} className='carousel'>
                    {onSet.map(image => {
                        return(
                            <div className='carousel-img-div' key={image.title}>
                                <img src={image.url} alt={image.title} onClick={() => triggerPopup(image)}/>  
                            </div>
                        )
                    })}             
            </Carousel>
        </div>
        <div className='carousel-outer'>
            <h2>On Stage</h2>
            <Carousel 
                {...settings}
                className='carousel'
                >
                    {onStage.map(image => {
                        return(
                            <div className='carousel-img-div'
                            key={image.title}>
                                <img src={image.url} alt={image.title} onClick={() => triggerPopup(image)}/>  
                            </div>
                        )
                    })}             
            </Carousel>
        </div>
        <div className='slider-outer'>
            <Carousel 
                {...sliderSettings}
                >
                    {headshotImages.map(image => {
                        return(
                            <div key={image.title}>
                               <div className='slider-img-div'
                               >
                                <img src={image.url} alt={image.title} onClick={() => triggerPopup(image)}/>  
                                </div> 
                            </div>
                        )
                    })}             
            </Carousel>
        </div>
        {/* <Slider images={headshotImages}/> */}

        {popup?<ImagePopup popup={popup} setPopup={setPopup} image={popupImage}/>:null}
    </div>
  )
}

export default Gallery