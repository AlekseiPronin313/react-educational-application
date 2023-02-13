import {FormAction, stopSubmit} from "redux-form"
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsType} from "./redux-store";

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
type ActionsTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST':
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
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case 'SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }
}

export const actions = {
    addPostActionCreator: (newPostText:string) => ({type: 'ADD_POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
}

export const getUserProfile = (userId:number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    const data = await profileAPI.getProfile(userId)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUserProfile(data))
}
export const getStatus = (userId:number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
        dispatch(actions.setStatus(data.data))
}
export const updateStatus = (status:string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(actions.setStatus(status))
            }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
            if (data.resultCode === 0) {
                dispatch(actions.savePhotoSuccess(data.data.photos))
            }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id
    const data = await profileAPI.saveProfile(profile)
            if (data.resultCode === 0) {
                if (userId != null) {
                    dispatch(getUserProfile(userId))
                } else {
                 throw new Error("userId can't be null")
                }
            } else {
                dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
                return Promise.reject(data.messages[0])
            }
}
export default profileReducer
