import {instance} from "./api";

interface GetCaptchaUrlResponseType {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
            .then(response => response.data)
    }
}
