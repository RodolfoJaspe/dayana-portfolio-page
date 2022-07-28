import axios from "axios";
import { currentUrl } from "../../Assets/urls";

export const GET_VIDEOS_START = "GET_VIDEOS_START";
export const GET_VIDEOS_SUCCESS = "GET_VIDEOS_SUCCESS";
export const GET_VIDEOS_FAILURE = "GET_VIDEOS_FAILURE";

export const ADD_VIDEO_START = "ADD_VIDEO_START";
export const ADD_VIDEO_SUCCESS = "ADD_VIDEO_SUCCESS";
export const ADD_VIDEO_FAILURE = "ADD_VIDEO_FAILURE";

export const DELETE_VIDEO_START = "DELETE_VIDEO_START";
export const DELETE_VIDEO_SUCCESS = "DELETE_VIDEO_SUCCESS";
export const DELETE_VIDEO_FAILURE = "DELETE_VIDEO_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getVideos = (user_id) => dispatch => {
    dispatch({type: GET_VIDEOS_START})
        axios.get(`${currentUrl}/api/videos/${user_id}`,{headers})
            .then(
                res => {
                    console.log(res.data)
                    const sortedVideos = res.data.sort((a, b) => {
                        return b.id - a.id;
                    });
                    dispatch({type:GET_VIDEOS_SUCCESS, payload: sortedVideos})
                }
            ).catch(err => {
                dispatch({type: GET_VIDEOS_FAILURE})
            })
}

export const addVideo = (video) => dispatch => {
    dispatch({type : ADD_VIDEO_START})
        axios.post(`${currentUrl}/api/videos/`,video)
            .then(res => {
                console.log(res)
                dispatch({type: ADD_VIDEO_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: ADD_VIDEO_FAILURE})
            })
}

export const deleteVideo = (id) => dispatch => {
    dispatch({type : DELETE_VIDEO_START})
    axios.delete(`${currentUrl}/api/videos/${id}`, headers)
        .then(res => {
            console.log(res)
            dispatch({type: DELETE_VIDEO_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch({type: DELETE_VIDEO_FAILURE})
        })
}