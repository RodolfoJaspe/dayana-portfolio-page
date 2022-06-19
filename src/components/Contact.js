import React, { useState, useRef } from 'react'
import '../styles/Contact.css';
import ImagePopup from './ImagePopup';
import {headshotImages} from "../Assets/images.js";
import "../styles/ImagePopup.css";
import emailjs from '@emailjs/browser';
import insta from "../Assets/icons/insta.png";
import facebook from "../Assets/icons/fb.png";
import youtube from "../Assets/icons/youtube.png";

function Contact() {
    const [ImgPopup, setImgPopup] = useState(false)
    const [popupImage, setPopupImage] = useState("")
    
    const headshot = headshotImages.filter(image => image.id === 9)
    
    const triggerPopup = (image) => {
        setImgPopup(!ImgPopup)
        setPopupImage(image)
    }

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h6yxzhl', 'template_496smvb', form.current, 'cY7LThc4skVPB9RcW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    
  return (
    <div className='contact'>
        <div className='headshot-div'>
          <img onClick={() => triggerPopup(headshot[0])}src={headshot[0].url} alt='headshot' />  
        </div>
        <div className='banner-contact-div'>
            <div>
                <h2>Contact Me</h2>
            </div>
            <div className='contact-content'>
                <div className="socials">
                    <p>Glory Glory Man United!</p>
                    <div className='logos'>
                        <img src={insta} alt="insta logo" onClick={() => openInNewTab('https://www.instagram.com/dayanamoralesl/?hl=en')}/>
                        <img src={facebook} alt="fb logo" onClick={() => openInNewTab('https://www.facebook.com/dayanamoralesl.actress')}/>
                        <img src={youtube} alt='youtube logo' onClick={() => openInNewTab('https://www.youtube.com/channel/UC5KN5vyf29aOiKHwGfyUMSQ/videos')}/>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <input placeholder='Name' className='input' type="text" name="name" />
                    <input placeholder='Email' className='input' type="email" name="email" />
                    <input placeholder='Subject' className='input' type="subject" name="subject" />
                    <textarea placeholder='Message' className='input message' name="message" />
                    <div className='submit-button-div'>
                        <input type="submit" value="Send" />  
                    </div>
                    
                </form>
            </div>
        </div>
        {ImgPopup?<ImagePopup popup={ImgPopup} setPopup={setImgPopup} image={popupImage}/>:null}
    </div>
  )
}

export default Contact