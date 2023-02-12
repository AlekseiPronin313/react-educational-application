import axios from "axios";
import {UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ade8e709-83b0-4f61-b2a6-89b52a29b921'
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesWithCaptcha {
    CaptchaIsRequired = 10,
}

export interface GetItemsType {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export interface APIResponseType<D = {}, RC = ResultCodesEnum | ResultCodesWithCaptcha> {
    data: D
    messages: Array<string>
    resultCode: RC
}
