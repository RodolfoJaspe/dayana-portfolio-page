import React from 'react';
import "../styles/Slider.css";
import AliceCarousel from 'react-alice-carousel';
import NextArrow from "../Assets/icons/right-arrow.png"
import PrevArrow from "../Assets/icons/left-arrow.png"

export default function Slider({images, triggerPopup}) {

    const handleDragStart = (e) => e.preventDefault();

    const pictures = images.map(image => (
        <div onClick={()=>triggerPopup(image)}>
            <img className="slider-image" src={image.url} alt={image.title} onDragStart={handleDragStart} role="presentation"/>
        </div>
    )) 

    const renderNextButton = ({ isDisabled }) => {
        return <div className='next-arrow'><img src={NextArrow} alt="next-arrow"/></div>
      };
    
      const renderPrevButton = ({ isDisabled }) => {
        return <div className='prev-arrow'><img src={PrevArrow} alt="prev-arrow"/></div>
      };
  return (
    <AliceCarousel 
        mouseTracking 
        items={pictures}
        className="slider"
        animationDuration={800}
        infinite
        keyboardNavigation
        animationType="fadeout" 
        controlsStrategy="alternate"
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        />
  )
}
