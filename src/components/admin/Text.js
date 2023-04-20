import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { currentUrl } from '../../Assets/urls'
import "../../styles/admin/Text.css"

function Text() {
    const [htmldiv, setHtml] = useState()
    useEffect(() => {
        axios.get(`${currentUrl}/api/users/1`).then(res => {
            console.log(res)
            setHtml(stringToHTML(res.data.biography))
        }).catch(err => console.log(err))
    },[])

    var stringToHTML = function (str) {
        // console.log(str)
        var dom = document.createElement('div');
        dom.innerHTML = str;
        return dom;
    };

    console.log("htmldiv ",htmldiv)

  return (
    <div className='text-outer'>
        {htmldiv?<div dangerouslySetInnerHTML={{__html: htmldiv.innerHTML}} />:null}
    </div>
    
  )
}


export default Text

 
