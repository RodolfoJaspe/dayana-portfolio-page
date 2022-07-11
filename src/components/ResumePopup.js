import React,{useEffect, useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import resume from '../Assets/resume.pdf';
import "../styles/ResumePopup.css";
import closeBtn from "../Assets/icons/close.png";
import pdf from "../Assets/icons/pdf.png"

function ResumePopup({popup, setPopup}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=> {
        setWindowWidth(window.innerWidth)
    },[windowWidth])
  return (
    <div className='resume-popup-outer'>
        <div className='resume-popup-inner'>
            <Document 
                className="document"
                file={resume} 
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page width={windowWidth>1000?1000:windowWidth} pageNumber={pageNumber} />
            </Document>
            <div className='download-resume-outer'>
                <div className='download-resume'>
                    <a href={resume} target="_blank">Download</a> 
               <img src={pdf} alt="pdf icon"/>
                </div>
            </div>
            <button 
                className='resume-popup-button'
                onClick={() => setPopup(!popup)}><img src={closeBtn} alt="close button" />
            </button>
        </div>
        
    </div>
  )
}

export default ResumePopup