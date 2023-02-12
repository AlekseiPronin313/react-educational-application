import {GetItemsType, instance} from "./api";

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollow(user: number) {
        return instance.post<>(`follow/${user}`)
            .then(response => response.data)
    },
    deleteFollow(user: number) {
        return instance.delete(`follow/${user}`)
            .then(response => response.data)
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}
