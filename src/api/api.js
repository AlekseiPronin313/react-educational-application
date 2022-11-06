import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '91c1a25e-2f9d-4134-b947-216cc9332fb1'
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
    }

}

export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}


