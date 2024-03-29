import {GetItemsType, instance, APIResponseType} from "./api";

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`
            + (friend === null ? '' : `&friend=${friend}`))
            .then(response => response.data)
    },
    postFollow(user: number) {
        return instance.post<APIResponseType>(`follow/${user}`)
            .then(response => response.data)
    },
    deleteFollow(user: number) {
        return instance.delete(`follow/${user}`)
            .then(response => response.data) as Promise<APIResponseType>
    },
    getProfile(userId: number) {
        return instance.get<GetItemsType>(`profile/${userId}`)
            .then(response => response.data)
    }
}
