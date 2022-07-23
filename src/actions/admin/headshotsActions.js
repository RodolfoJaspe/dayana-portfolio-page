import axios from "axios";

export const GET_HEADSHOTS_START = "GET_HEADSHOTS_START";
export const GET_HEADSHOTS_SUCCESS = "GET_HEADSHOTS_SUCCESS";
export const GET_HEADSHOTS_FAILURE = "GET_HEADSHOTS_FAILURE";

export const ADD_HEADSHOT_START = "ADD_HEADSHOT_START";
export const ADD_HEADSHOT_SUCCESS = "ADD_HEADSHOT_SUCCESS";
export const ADD_HEADSHOT_FAILURE = "ADD_HEADSHOT_FAILURE";

export const DELETE_HEADSHOT_START = "DELETE_HEADSHOT_START";
export const DELETE_HEADSHOT_SUCCESS = "DELETE_HEADSHOT_SUCCESS";
export const DELETE_HEADSHOT_FAILURE = "DELETE_HEADSHOT_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getHeadshots = (user_id) => dispatch => {
    dispatch({type: GET_HEADSHOTS_START});
    console.log(user_id)
    axios.get(`https://dayana-portfolio.herokuapp.com/api/headshots/${user_id}`,{headers})
        .then(
            res => {
                console.log(res.data)
                dispatch({type:GET_HEADSHOTS_SUCCESS, payload: res.data})
            }
        ).catch(err => {
            console.log(err)
            dispatch({type: GET_HEADSHOTS_FAILURE})
        })
}

export const addHeadshot = (image) => dispatch => {
    dispatch({type : ADD_HEADSHOT_START})
    console.log(image)
        axios.post(`https://dayana-portfolio.herokuapp.com/api/headshots/`,image)
            .then(res => {
                console.log(res)
                dispatch({type: ADD_HEADSHOT_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: ADD_HEADSHOT_FAILURE})
            })
}

export const deleteHeadshot = (id) => dispatch => {
    console.log(id)
    dispatch({type : DELETE_HEADSHOT_START})
    axios.delete(`https://dayana-portfolio.herokuapp.com/api/headshots/${id}`, headers)
        .then(res => {
            console.log(res)
            dispatch({type: DELETE_HEADSHOT_SUCCESS, payload:res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: DELETE_HEADSHOT_FAILURE})
        })
}
