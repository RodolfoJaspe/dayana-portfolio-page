import axios from "axios";
import { currentUrl } from "../../Assets/urls";

export const DELETE_USER_START="DELETE_USER_START";
export const DELETE_USER_SUCCESS="DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE="DELETE_USER_FAILURE";

export const USER_LOGIN_START="USER_LOGIN_START";
export const USER_LOGIN_SUCCESS="USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE="USER_LOGIN_FAILURE";

export const CLEAR_LOGIN_ERROR = "CLEAR_LOGIN_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";

export const ADD_BIOGRAPHY_START = "ADD_BIOGRAPHY_START";
export const ADD_BIOGRAPHY_SUCCESS = "ADD_BIOGRAPHY_SUCCESS";
export const ADD_BIOGRAPHY_FAILURE = "ADD_BIOGRAPHY_FAILURE";

export const GET_BIOGRAPHY_SUCCESS = "GET_BIOGRAPHY_SUCCESS";
export const GET_BIOGRAPHY_FAILURE = "GET_BIOGRAPHY_FAILURE";

const headers = {
    Accept: "application/json"
}


export const login = (user, setUser, go) => dispatch => {
    dispatch({ type: USER_LOGIN_START})
    axios.post(`${currentUrl}/api/users/login/`, user).then(
        res => {
            console.log(res.data.user)
            setUser({
                username: "",
                password: ""
            })
            localStorage.setItem('token', res.data.token)
            dispatch({type: USER_LOGIN_SUCCESS, payload: res.data.user})
            go(res.data.user.user_id)
        }
    ).catch(err => {
        dispatch({type: USER_LOGIN_FAILURE, payload: err.message})
    })
}

export const deleteUser = (user_id) => dispatch => {
    dispatch({type: DELETE_USER_START})
    axios.delete(`${currentUrl}/api/users/${user_id}`, {headers})
        .then(res => {
            console.log(res)
            dispatch({type:DELETE_USER_SUCCESS})
        }).catch(err => {
            dispatch({type: DELETE_USER_FAILURE, payload:err})
        })
}

export const clearLoginError = () => dispatch => {
    dispatch({type: CLEAR_LOGIN_ERROR})
}

export const userLogout = () => dispatch => {
    dispatch({ type: USER_LOGOUT })
}

export const addBiography = (user_id, biography) => dispatch => {
    // dispatch({type: ADD_BIOGRAPHY_START})
    // axios.put(`${currentUrl}/api/users/${user_id}`, {biography})
    //     .then(res => {
    //         console.log(res)
    //         dispatch({type: ADD_BIOGRAPHY_SUCCESS, payload:res.data.biography})
    //     })
    //     .catch(err => {
    //         dispatch({type: ADD_BIOGRAPHY_FAILURE, payload:err})
    //     })
    // dispatch({type: ADD_BIOGRAPHY_SUCCESS, payload: biography})
    console.log("add biography")
}

export const getBiography = (user_id) => dispatch => {
    axios.get(`${currentUrl}/api/users/${user_id}`)
        .then(res => {
           dispatch({type: GET_BIOGRAPHY_SUCCESS, payload: res.data.biography}) 
        })
        .catch(err => {
            dispatch({type: GET_BIOGRAPHY_FAILURE, payload: err.message})
        })  
}


