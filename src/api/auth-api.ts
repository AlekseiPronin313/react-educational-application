import {instance, ResultCodesEnum} from "./api";

interface ResponseType<D = {}, RC = ResultCodesEnum> {
    data: D
    messages: Array<string>
    resultCode: RC
}

type MeResponseDataType = {
        id: number
        email: string
        login: string
}
type LoginResponseDataType = {
        userId: number
}
export const authAPI = {
    getAuth() {
        return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
            .then(response => response)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<ResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}
