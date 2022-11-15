import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ade8e709-83b0-4f61-b2a6-89b52a29b921'
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollow(user){
        return instance.post(`follow/${user}`)
            .then(response => response.data)
    },
    deleteFollow(user){
        return instance.delete(`follow/${user}`)
            .then(response => response.data)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}


