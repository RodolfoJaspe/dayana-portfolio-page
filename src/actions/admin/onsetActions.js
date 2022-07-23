import axios from "axios";

export const GET_ONSET_START = "GET_ONSET_START";
export const GET_ONSET_SUCCESS = "GET_ONSET_SUCCESS";
export const GET_ONSET_FAILURE = "GET_ONSET_FAILURE";

export const ADD_ONSET_START = "ADD_ONSET_START";
export const ADD_ONSET_SUCCESS = "ADD_ONSET_SUCCESS";
export const ADD_ONSET_FAILURE = "ADD_ONSET_FAILURE";

export const DELETE_ONSET_START = "DELETE_ONSET_START";
export const DELETE_ONSET_SUCCESS = "DELETE_ONSET_SUCCESS";
export const DELETE_ONSET_FAILURE = "DELETE_ONSET_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getOnset = (user_id) => dispatch => {
    dispatch({type: GET_ONSET_START})
    axios.get(`https://dayana-portfolio.herokuapp.com/api/onset/${user_id}`,{headers})
        .then(
            res => {
                console.log(res.data)
                dispatch({type:GET_ONSET_SUCCESS, payload: res.data})
            }
        ).catch(err => {
            dispatch({type: GET_ONSET_FAILURE})
        })
}

export const addOnset = (image) => dispatch => {
    dispatch({type : ADD_ONSET_START})
    axios.post(`https://dayana-portfolio.herokuapp.com/api/onset/`,image)
        .then(res => {
            console.log(res)
            dispatch({type: ADD_ONSET_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: ADD_ONSET_FAILURE})
        })
}

export const deleteOnset = (id) => dispatch => {
    dispatch({type : DELETE_ONSET_START})
    axios.delete(`https://dayana-portfolio.herokuapp.com/api/onset/${id}`, headers)
        .then(res => {
            console.log(res)
            dispatch({type: DELETE_ONSET_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch({type: DELETE_ONSET_FAILURE})
        })
}