import axios from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ade8e709-83b0-4f61-b2a6-89b52a29b921'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollow(user: number){
        return instance.post(`follow/${user}`)
            .then(response => response.data)
    },
    deleteFollow(user: number){
        return instance.delete(`follow/${user}`)
            .then(response => response.data)
    },
    getProfile(userId: number){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put('profile', profile)
            .then(response => response.data)
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesWithCaptcha {
    CaptchaIsRequired = 10,
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: number
    messages: Array<string>
}

export const authAPI = {
    getAuth(){
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
            .then(response => response)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null){
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data)
    }
}

