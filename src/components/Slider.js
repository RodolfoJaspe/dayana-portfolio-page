import React from 'react';
import "../styles/Slider.css";
import AliceCarousel from 'react-alice-carousel';

export default function Slider({images, triggerPopup}) {

    const handleDragStart = (e) => e.preventDefault();

    const pictures = images.map(image => (
        <div onClick={()=>triggerPopup(image)}>
            <img className="slider-image" src={image.url} alt={image.title} onDragStart={handleDragStart} role="presentation"/>
        </div>
    )) 

console.log(pictures)
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
        />
  )
}
