import {profileAPI} from "../api/api"
import {stopSubmit} from "redux-form"
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const TOGGLE_IS_FETCHING = 'profile/TOGGLE_IS_FETCHING'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

let initialState = {
        posts: [
            {id: 1, message: 'hi', likesCount: 12},
            {id: 2, message: 'hey', likesCount: 2},
            {id: 3, message: 'da', likesCount: 7},
            {id: 4, message: 'yes', likesCount: 33},
        ] as Array<PostType>,
        profile: null as ProfileType | null,
        isFetching: false,
        status: '',
        newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action:any): InitialStateType => {
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }
}

type AddPostActionCreatorType = {
    type: typeof  ADD_POST
    newPostText: string
}

export const addPostActionCreator = (newPostText:string): AddPostActionCreatorType => ({type: ADD_POST, newPostText})
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string):SetStatusType => ({type: SET_STATUS, status})
type DeletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId})
type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching })

export const getUserProfile = (userId:number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    const data = await profileAPI.getProfile(userId)
        dispatch(toggleIsFetching(false))
        dispatch(setUserProfile(data))
}
export const getStatus = (userId:number) => async (dispatch: any) => {
    const data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data.data))
}
export const updateStatus = (status:string) => async (dispatch: any) => {
    const data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    const data = await profileAPI.savePhoto(file)
            if (data.resultCode === 0) {
                dispatch(savePhotoSuccess(data.data.photos))
            }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id
    const data = await profileAPI.saveProfile(profile)
            if (data.resultCode === 0) {
                dispatch(getUserProfile(userId))
            } else {
                dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
                return Promise.reject(data.messages[0])
            }
}

export default profileReducer
