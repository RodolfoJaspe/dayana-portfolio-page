import React,{useState} from 'react';
import "../styles/Slider.css";
import BtnSlider from './BtnSlider';
import ImagePopup from './ImagePopup.js';


export default function Slider({images}) {

    const [popup, setPopup] = useState(false)
    const [popupImage, setPopupImage] = useState("")

    const triggerPopup = (image) => {
        setPopup(!popup)
        setPopupImage(image)
    }


    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== images.length){
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === images.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1){
            setSlideIndex(images.length)
        }
    }

    const moveDot = (index) => {
        setSlideIndex(index)
    }
  return (
    <div className='container-slider'>
        {images.map((image, index) => {
            return(
                <div className={slideIndex === index + 1?'slide active-anim': 'slide'} key={image.id}>
                    <img onClick={()=>triggerPopup(image)}src={image.url} />
                    <BtnSlider moveSlide={nextSlide} direction={"next"}/>
                    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                    <div className='container-dots'>
                        {Array.from({length:images.length}).map((item,index)=> (
                            <div 
                            className={slideIndex === index + 1?'dot active': 'dot'}
                            onClick={()=> moveDot(index + 1)}></div>
                        ))}
                    </div>
                </div>
                
            )
        })}
        {popup?<ImagePopup popup={popup} setPopup={setPopup} image={popupImage}/>:null}
    </div>
  )
}
