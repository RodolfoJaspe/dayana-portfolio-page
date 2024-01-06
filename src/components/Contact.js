import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import facebook from "../Assets/icons/fb.png";
import insta from "../Assets/icons/insta.png";
import { pageImages } from "../Assets/images.js";
import '../styles/Contact.css';
import "../styles/ImagePopup.css";
import ImagePopup from './ImagePopup';

function Contact() {
    const [ImgPopup, setImgPopup] = useState(false)
    const [popupImage, setPopupImage] = useState("")
    
    const headshot = pageImages.find(image => image.id === 3)
    
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

        emailjs.sendForm('service_h6yxzhl', 'template_496smvb', form.current, '3fjWoU26gcULc4m0c')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    
  return (
    <div className='contact'>
        <div className='banner-contact-div'>
            <div className='contact-content'>
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <input placeholder='Name' className='input' type="text" name="name" />
                    <input placeholder='Email' className='input' type="email" name="email" />
                    <input placeholder='Subject' className='input' type="subject" name="subject" />
                    <textarea placeholder='Message' className='input message' name="message" />
                    <div className='submit-button-div'>
                        <input type="submit" value="Send" />  
                    </div>
                </form>
                <div className="socials">
                    <div>
                        <h2>Contact Me</h2>
                    </div>
                    <div className='profiles'>
                        <a href="https://app.castingnetworks.com/talent/public-profile/6cbd6400-cfcd-11eb-9fcf-bbc349cdee45" alt="casting networks link" target='_blank'>Casting Networks</a>
                        <a href="https://resumes.actorsaccess.com/Dayanamorales" alt="actors access link" target='_blank'>Actors Access</a>
                        <a href="https://www.backstage.com/tal/dayana-morales" alt="backstage link" target='_blank'>Backstage</a>

                    </div>
                    <div className='logos'>
                        <img src={insta} alt="insta logo" onClick={() => openInNewTab('https://www.instagram.com/dayanamoralesl/?hl=en')}/>
                        <img src={facebook} alt="fb logo" onClick={() => openInNewTab('https://www.facebook.com/dayanamoralesl.actress')}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='headshot-div'>
          <img onClick={() => triggerPopup(headshot)}src={headshot.url} alt='headshot' />  
        </div>
        {ImgPopup?<ImagePopup popup={ImgPopup} setPopup={setImgPopup} image={popupImage}/>:null}
    </div>
  )
}

export default Contact