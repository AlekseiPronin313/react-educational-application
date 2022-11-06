import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
        posts: [
            {id: 1, message: 'hi', likesCount: 12},
            {id: 2, message: 'hey', likesCount: 2},
            {id: 3, message: 'da', likesCount: 7},
            {id: 4, message: 'yes', likesCount: 33},
        ],
        newPostText: '',
        profile: null,
        status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [ newPost, ...state.posts],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.profile
            }
            case SET_STATUS:
            return  {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
    })
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer