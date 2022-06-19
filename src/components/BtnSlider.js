import React from 'react';
import "../styles/Slider.css";
import leftArrow from "../Assets/icons/left-arrow.png";
import rightArrow from "../Assets/icons/right-arrow.png";


export default function BtnSlider({direction, moveSlide}) {
  return (
    <button onClick={moveSlide} className={direction ==='next'? 'btn-slide next':'btn-slide prev'}>
        <img src={direction === 'next'? rightArrow : leftArrow} />
    </button>
  )
}
