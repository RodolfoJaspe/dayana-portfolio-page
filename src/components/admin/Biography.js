import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getBiography } from '../../actions/admin/userActions';
import "../../styles/admin/Biography.css";

function Biography({getBiography, biography}) {

    useEffect(() => {
        getBiography()
    },[])

  return (
    <div>
        {JSON.parse(biography)}
    </div>
  )
}

const mapStateToProps = state => {
    return {
        biography : state.userReducer.user.biography
    }
}

export default connect(mapStateToProps, {getBiography})(Biography)
