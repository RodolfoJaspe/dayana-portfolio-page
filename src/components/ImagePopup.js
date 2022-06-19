import React from 'react';
import "../styles/ImagePopup.css";
import closeBtn from "../Assets/icons/close.png"

export default function ImagePopup({popup, setPopup, image}) {
  return (
    <div className='image-popup-outer'>
        <div className='image-popup-inner'>
            <img src={image.url} alt={image.title} />
            <button 
                className='image-popup-button'
                onClick={() => setPopup(!popup)}><img src={closeBtn} alt="close button" /></button>
        </div>
    </div>
  )
}
