import React from 'react'
import '../styles/Home.css';
import {pageImages} from "../Assets/images.js";

function Home() {

    const image = pageImages.find(image => image.id === 1)
  return (
    <div className='home'>
        <img src={image.url} alt="drive image"/>
        <div className='h1-div'>
            <div className='first-name'>D A Y A N A</div><div className='last-name'>M O R A L E S</div>
        </div>
    </div>
  )
}

export default Home