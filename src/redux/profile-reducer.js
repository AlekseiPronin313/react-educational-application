import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const TOGGLE_IS_FETCHING = 'profile/TOGGLE_IS_FETCHING'

let initialState = {
        posts: [
            {id: 1, message: 'hi', likesCount: 12},
            {id: 2, message: 'hey', likesCount: 2},
            {id: 3, message: 'da', likesCount: 7},
            {id: 4, message: 'yes', likesCount: 33},
        ],
        profile: null,
        isFetching: false,
        status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })

export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await profileAPI.getProfile(userId)
        dispatch(toggleIsFetching(false))
        dispatch(setUserProfile(data))
}
export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data.data))
}
export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}

export default profileReducer