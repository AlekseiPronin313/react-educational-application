import {ResultCodesEnum, ResultCodesWithCaptcha} from "../api/api";
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
            case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

type SetAuthUserDataPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataPayloadType
}

type SetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {captchaUrl: string}
}

export const setAuthUserData = (id:number | null, email:string | null, login:string | null, isAuth:boolean): SetAuthUserDataType => ({
    type: SET_USER_DATA, payload: {id, email, login, isAuth}})

export const setCaptchaUrlSuccess = (captchaUrl: string): SetCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch:any) => {
    const meData = await authAPI.getAuth()
            if (meData.resultCode === ResultCodesEnum.Success) {
                let {id, email, login} = meData.data
                dispatch(setAuthUserData(id, email, login, true))
        }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha)
            if (loginData.resultCode === ResultCodesEnum.Success) {
                dispatch(getAuthUserData())
            } else {
                if (loginData.resultCode === ResultCodesWithCaptcha.CaptchaIsRequired) {
                    dispatch(getCaptchaUrl())
                }
                const message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
}

export const getCaptchaUrl = () => async (dispatch:any) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(setCaptchaUrlSuccess(captchaUrl))

}

export const logout = () => async (dispatch:any) => {
    const data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
}

export default authReducer
