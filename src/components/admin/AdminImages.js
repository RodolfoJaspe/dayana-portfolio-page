import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/admin/AdminImages.css";

export default function AdminImages({images, addImage, deleteImage, user_id}) {

    const [newImage, setNewImage] = useState({
        title:'',
        url:'',
        user_id: user_id
    });

    const formSubmit = e => {
        e.preventDefault()
        console.log(newImage)
        addImage({...newImage,
            url: `https://drive.google.com/uc?export=view&id=${newImage.url}`
        })
    }

    const inputChanges = e => {
        e.persist()
        setNewImage({
            ...newImage,
          [e.target.name]: e.target.value,
        });
      };

  return (
    <div className='admin-image-outer'>
        <div className='admin-image-form'>
            <form onSubmit={formSubmit}>
                <input type='text' id='title' name='title' placeholder='image title' value={newImage.title} onChange={inputChanges}/>
                <input type='text' id='url' name='url' placeholder='image url' value={newImage.url} onChange={inputChanges}/>
                <button>Add</button>
            </form>
        </div>
        <div className='admin-image-list'>
            {images?images.map(image => (
                <div className='image-div'>
                    <img src={image.url} alt={image.title}/>
                    <button onClick={()=>deleteImage(image.id)}>Delete</button>
                </div>
            )):null}
        </div>
    </div>
  )
}


