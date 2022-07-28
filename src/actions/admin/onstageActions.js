import axios from "axios";
import { currentUrl } from "../../Assets/urls";

export const GET_ONSTAGE_START = "GET_ONSTAGE_START";
export const GET_ONSTAGE_SUCCESS = "GET_ONSTAGE_SUCCESS";
export const GET_ONSTAGE_FAILURE = "GET_ONSTAGE_FAILURE";

export const ADD_ONSTAGE_START = "ADD_ONSTAGE_START";
export const ADD_ONSTAGE_SUCCESS = "ADD_ONSTAGE_SUCCESS";
export const ADD_ONSTAGE_FAILURE = "ADD_ONSTAGE_FAILURE";

export const DELETE_ONSTAGE_START = "DELETE_ONSTAGE_START";
export const DELETE_ONSTAGE_SUCCESS = "DELETE_ONSTAGE_SUCCESS";
export const DELETE_ONSTAGE_FAILURE = "DELETE_ONSTAGE_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getOnstage = (user_id) => dispatch => {
    dispatch({type: GET_ONSTAGE_START})
        axios.get(`${currentUrl}/api/onstage/${user_id}`,{headers})
            .then(
                res => {
                    const sortedOnstage = res.data.sort((a, b) => {
                        return b.id - a.id;
                    });
                    dispatch({type:GET_ONSTAGE_SUCCESS, payload: sortedOnstage})
                }
            ).catch(err => {
                dispatch({type: GET_ONSTAGE_FAILURE})
            })
}

export const addOnstage = (image) => dispatch => {
    dispatch({type : ADD_ONSTAGE_START})
        axios.post(`${currentUrl}/api/onstage/`,image)
            .then(res => {
                console.log(res)
                dispatch({type: ADD_ONSTAGE_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: ADD_ONSTAGE_FAILURE})
            })
}

export const deleteOnstage = (id) => dispatch => {
    dispatch({type : DELETE_ONSTAGE_START})
    axios.delete(`${currentUrl}/api/onstage/${id}`, headers)
        .then(res => {
            console.log(res)
            dispatch({type: DELETE_ONSTAGE_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch({type: DELETE_ONSTAGE_FAILURE})
        })
}