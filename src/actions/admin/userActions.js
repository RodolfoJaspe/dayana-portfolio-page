import axios from "axios";
import {getHeadshots} from "./headshotsActions.js"
import {getOnset} from "./onsetActions"
import {getOnstage} from "./onstageActions.js" 
import {getVideos} from "./videosActions.js"

export const DELETE_USER_START="DELETE_USER_START";
export const DELETE_USER_SUCCESS="DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE="DELETE_USER_FAILURE";

export const USER_LOGIN_START="USER_LOGIN_START";
export const USER_LOGIN_SUCCESS="USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE="USER_LOGIN_FAILURE";

export const CLEAR_LOGIN_ERROR = "CLEAR_LOGIN_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";

const headers = {
    Accept: "application/json"
}


export const login = (user, setUser, go) => dispatch => {
    dispatch({ type: USER_LOGIN_START})
    axios.post("https://dayana-portfolio.herokuapp.com/api/users/login/", user).then(
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
    axios.delete(`https://dayana-portfolio.herokuapp.com/api/users/${user_id}`, {headers})
        .then(res => {
            console.log(res)
            dispatch({type:DELETE_USER_SUCCESS})
        }).catch(err => {
            console.log(err)
            dispatch({type: DELETE_USER_FAILURE})
        })
}

export const clearLoginError = () => dispatch => {
    dispatch({type: CLEAR_LOGIN_ERROR})
}

export const userLogout = () => dispatch => {
    dispatch({ type: USER_LOGOUT })
}

