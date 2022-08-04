import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addBiography } from '../../actions/admin/userActions';
import "../../styles/admin/Biography.css";

function Biography({addBiography,user}) {

    const[biography, setBiography] = useState({
        biography:""
    });

    const changeHandler = e => {
        e.persist()
        setBiography({[e.target.name]:e.target.value})
    }

    const submitForm = e => {
        e.preventDefault()
        addBiography(user.user_id, biography.biography)
    }

  return (
    <div>
        <form onSubmit={submitForm} className='bio-form'>
            <textarea 
                placeholder='write bio here'
                name="biography"
                className='bio-textarea'
                value={biography.biography}
                onChange={changeHandler}
                />
            <button>
                Save
            </button>
        </form>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        user : state.userReducer
    }
}

export default connect(mapStateToProps, {addBiography})(Biography)
