import {instance, APIResponseType} from "./api";

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
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
            .then(response => response)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}
