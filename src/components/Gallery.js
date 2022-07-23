import React,{useEffect, useState} from 'react'
import '../styles/Gallery.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from './Carousel';
import Slider from './Slider';
import ImagePopup from './ImagePopup.js';
import { getHeadshots } from '../actions/admin/headshotsActions';
import { getOnset } from '../actions/admin/onsetActions';
import { getOnstage } from '../actions/admin/onstageActions';
import { connect } from 'react-redux';

function Gallery({headshots,onset,onstage,getHeadshots,getOnset,getOnstage}) {

    const [popup, setPopup] = useState(false);
    const [popupImage, setPopupImage] = useState("");

    useEffect(()=>{
        getHeadshots(1)
        getOnset(1)
        getOnstage(1)
    },[getHeadshots,getOnset,getOnstage])

    const triggerPopup = (image) => {
        setPopup(!popup)
        setPopupImage(image)
    }

  return (
    <div className='gallery'>
        <div className='carousel-outer'>
            <h2>On Set</h2>
            <Carousel images={onset} triggerPopup={triggerPopup}/>            
        </div>
        <div className='carousel-outer'>
            <h2>On Stage</h2>
            <Carousel images={onstage} triggerPopup={triggerPopup}/>    
        </div>
        <div className='slider-outer'>
            <div className='slider-inner'>
                <Slider images={headshots} triggerPopup={triggerPopup} singleImage={true}/>   
            </div> 
        </div>
        {popup?<ImagePopup popup={popup} setPopup={setPopup} image={popupImage}/>:null}
    </div>
  )
}

const mapStateToProps = state => {
    return {
        headshots : state.userReducer.media.images.headshots,
        onset : state.userReducer.media.images.onset,
        onstage : state.userReducer.media.images.onstage,
    }
}
export default connect(mapStateToProps,{getHeadshots,getOnset,getOnstage})(Gallery)