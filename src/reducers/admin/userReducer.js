import { USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, CLEAR_LOGIN_ERROR, USER_LOGOUT } from "../../actions/admin/userActions"
import { GET_HEADSHOTS_START, GET_HEADSHOTS_SUCCESS, GET_HEADSHOTS_FAILURE, ADD_HEADSHOT_START, ADD_HEADSHOT_SUCCESS, ADD_HEADSHOT_FAILURE, DELETE_HEADSHOT_START, DELETE_HEADSHOT_SUCCESS, DELETE_HEADSHOT_FAILURE} from "../../actions/admin/headshotsActions.js";
import { GET_ONSET_START, GET_ONSET_SUCCESS, GET_ONSET_FAILURE, ADD_ONSET_START, ADD_ONSET_SUCCESS, ADD_ONSET_FAILURE, DELETE_ONSET_START, DELETE_ONSET_SUCCESS, DELETE_ONSET_FAILURE } from "../../actions/admin/onsetActions";
import { GET_ONSTAGE_START, GET_ONSTAGE_SUCCESS, GET_ONSTAGE_FAILURE, ADD_ONSTAGE_START, ADD_ONSTAGE_SUCCESS, ADD_ONSTAGE_FAILURE, DELETE_ONSTAGE_START, DELETE_ONSTAGE_SUCCESS, DELETE_ONSTAGE_FAILURE } from "../../actions/admin/onstageActions";
import { GET_VIDEOS_START, GET_VIDEOS_SUCCESS, GET_VIDEOS_FAILURE, ADD_VIDEO_START, ADD_VIDEO_SUCCESS, ADD_VIDEO_FAILURE, DELETE_VIDEO_START, DELETE_VIDEO_SUCCESS, DELETE_VIDEO_FAILURE } from "../../actions/admin/videosActions";

const user = {
    user_id : "",
    username : "",
    biography: "",
    loading: false,
    loginError: "",
    media: {
        images : {
            headshots : [],
            onset : [],
            onstage : []
        },
        videos : []
    }
}

export const userReducer = ( state = user, action ) => {
    switch( action.type ) {
        case USER_LOGIN_START:
            return {...state, loading: true };
        case USER_LOGIN_SUCCESS:
            return {...state, user_id:action.payload.user_id, username: action.payload.username, loading: false };
        case USER_LOGIN_FAILURE:
            return {...state, loading: false, loginError: action.payload };
        case CLEAR_LOGIN_ERROR:
            return { ...state, loginError: ""};
        case USER_LOGOUT:
            return {...state, user_id: "", username: "", loading:false };
        case GET_HEADSHOTS_START:
            return {...state, loading: true};
        case GET_HEADSHOTS_SUCCESS:
            return {...state, loading:false, media: {...state.media, images: {...state.media.images, headshots: action.payload}}};
        case GET_HEADSHOTS_FAILURE:
            return {...state, loading:false};
        case ADD_HEADSHOT_START:
            return {...state, loading:true};
        case ADD_HEADSHOT_SUCCESS:
            return {...state, loading:false, media: {...state.media,images: {...state.media.images, headshots: [...state.media.images.headshots, action.payload]}}};
        case ADD_HEADSHOT_FAILURE:
            return {...state, loading: false};
        case DELETE_HEADSHOT_START:
            return {...state, loading: true};
        case DELETE_HEADSHOT_SUCCESS:
            const filteredHeadshots = state.media.images.headshots.filter(image => image.id !== action.payload.id)
            return {...state, loading: false, media: {...state.media,images: {...state.media.images, headshots: filteredHeadshots}}};
        case DELETE_HEADSHOT_FAILURE:
            return {...state, loading:false};
        case GET_ONSET_START:
            return {...state, loading: true};
        case GET_ONSET_SUCCESS:
            return {...state, loading:false, media: {...state.media, images: {...state.media.images, onset: action.payload}}};
        case GET_ONSET_FAILURE:
            return {...state, loading:false};
        case ADD_ONSET_START:
            return {...state, loading:true};
        case ADD_ONSET_SUCCESS:
            return {...state, loading:false, media: {...state.media,images: {...state.media.images, onset: [...state.media.images.onset, action.payload]}}};
        case ADD_ONSET_FAILURE:
            return {...state, loading: false};
        case DELETE_ONSET_START:
            return {...state, loading: true};
        case DELETE_ONSET_SUCCESS:
            const filteredOnset = state.media.images.onset.filter(image => image.id !== action.payload.id)
            return {...state, loading: false, media: {...state.media,images: {...state.media.images, onset: filteredOnset}}};
        case DELETE_ONSET_FAILURE:
            return {...state, loading:false};  
        case GET_ONSTAGE_START:
            return {...state, loading: true};
        case GET_ONSTAGE_SUCCESS:
            return {...state, loading:false, media: {...state.media, images: {...state.media.images, onstage: action.payload}}};
        case GET_ONSTAGE_FAILURE:
            return {...state, loading:false};
        case ADD_ONSTAGE_START:
            return {...state, loading:true};
        case ADD_ONSTAGE_SUCCESS:
            return {...state, loading:false, media: {...state.media,images: {...state.media.images, onstage: [...state.media.images.onstage, action.payload]}}};
        case ADD_ONSTAGE_FAILURE:
            return {...state, loading: false};
        case DELETE_ONSTAGE_START:
            return {...state, loading: true};
        case DELETE_ONSTAGE_SUCCESS:
            const filteredOnstage = state.media.images.onstage.filter(image => image.id !== action.payload.id)
            return {...state, loading: false, media: {...state.media,images: {...state.media.images, onstage: filteredOnstage}}};
        case DELETE_ONSTAGE_FAILURE:
            return {...state, loading:false}; 
        case GET_VIDEOS_START:
            return {...state, loading: true};
        case GET_VIDEOS_SUCCESS:
            return {...state, loading:false, media: {...state.media, videos: action.payload}};
        case GET_VIDEOS_FAILURE:
            return {...state, loading:false};
        case ADD_VIDEO_START:
            return {...state, loading:true};
        case ADD_VIDEO_SUCCESS:
            return {...state, loading:false, media: {...state.media,videos: [...state.media.videos, action.payload]}};
        case ADD_VIDEO_FAILURE:
            return {...state, loading: false};
        case DELETE_VIDEO_START:
            return {...state, loading: true};
        case DELETE_VIDEO_SUCCESS:
            const filteredVideos = state.media.videos.filter(video => video.id !== action.payload.id)
            return {...state, loading: false, media: {...state.media, videos: filteredVideos}};
        case DELETE_VIDEO_FAILURE:
            return {...state, loading:false}; 
        default:
            return state;
    }
}