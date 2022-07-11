import React,{useState} from 'react';
import "../styles/Carousel.css";
import AliceCarousel from 'react-alice-carousel';
import NextArrow from "../Assets/icons/right-arrow.png"
import PrevArrow from "../Assets/icons/left-arrow.png"

export default function Carousel({images, triggerPopup}) {

    const [isDragging, setIsDragging] = useState(false);

    /* to avoid clicking of an image when swiping */
    const handleDragStart = (e) => {
        setIsDragging(true)
        setTimeout(()=>{
            setIsDragging(false)
        },2000)
        e.preventDefault()};

    const openImage = (image)=> {
        if(!isDragging){
            triggerPopup(image)
        }
    }

    const pictures = images.map(image => (
        <div onClick={()=>openImage(image)}>
            <img className="carousel-image" src={image.url} alt={image.title} onDragStart={handleDragStart} role="presentation"/>
        </div>
    )) 

    const responsive = {
        500: { items: 1 },
        635: { items: 2 },
        950: { items: 3 },
        1600: { items: 4 },
    };

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
        className="carousel"
        responsive={responsive}
        autoPlay
        autoPlayInterval={2000}
        animationDuration={1000}
        infinite
        keyboardNavigation
        controlsStrategy="alternate"
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        />
  )
}
