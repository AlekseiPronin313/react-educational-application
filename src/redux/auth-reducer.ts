import {ResultCodesEnum, ResultCodesWithCaptcha} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsType} from "./redux-store";

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
            case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (id:number | null, email:string | null, login:string | null, isAuth:boolean) => ({
        type: 'SET_USER_DATA', payload: {id, email, login, isAuth}} as const),
    setCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const),
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.getAuth()
            if (meData.resultCode === ResultCodesEnum.Success) {
                let {id, email, login} = meData.data
                dispatch(actions.setAuthUserData(id, email, login, true))
        }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any): ThunkType => async (dispatch) => {
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

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.setCaptchaUrlSuccess(captchaUrl))

}

export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(actions.setAuthUserData(null, null, null, false))
        }
}

export default authReducer
