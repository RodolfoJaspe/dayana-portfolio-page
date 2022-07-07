import React from 'react';
import "../styles/Carousel.css";
import AliceCarousel from 'react-alice-carousel';

export default function Carousel({images, triggerPopup}) {

    const handleDragStart = (e) => e.preventDefault();

    const pictures = images.map(image => (
        <div onClick={()=>triggerPopup(image)}>
            <img className="carousel-image" src={image.url} alt={image.title} onDragStart={handleDragStart} role="presentation"/>
        </div>
    )) 

    const responsive = {
        500: { items: 1 },
        800: { items: 2 },
        1350: { items: 3 },
        1780: { items: 4 },
    };

console.log(pictures)
  return (
    <AliceCarousel 
        mouseTracking 
        items={pictures}
        className="carousel"
        responsive={responsive}
        autoPlay
        autoPlayInterval={2000}
        animationDuration={1000}
        infinite
        keyboardNavigation
        controlsStrategy="alternate"
        />
  )
}
