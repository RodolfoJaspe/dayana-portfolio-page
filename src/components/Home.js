import React from 'react'
import '../styles/Home.css';
import {bannerImg} from "../Assets/images.js";

function Home() {
  return (
    <div className='home'>
        <img src={bannerImg} alt="drive image"/>
        <div className='h1-div'>
           <h1>Dayana Morales</h1> 
        </div>
    </div>
  )
}

export default Home