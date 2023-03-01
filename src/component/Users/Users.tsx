import React, {useEffect} from "react";
import Style from './Users.module.scss'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";
import {UsersSearchForm} from "./UsersSeachForm";
import {FilterType, requestUsers} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import {AnyAction} from "redux";

type PropsType = {

}

const Users: React.FC<PropsType> = ( props) => {
    const dispatch = useDispatch()

    const users = useSelector(getUsers)
    const totalItemsCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter) as unknown as AnyAction)
    }, [])
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId) as unknown as AnyAction)
    }
    const follow = (userId: number) => {
        dispatch(follow(userId) as unknown as AnyAction)
    }
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter) as unknown as AnyAction)
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter) as unknown as AnyAction)
    }

    return (
        <div className={Style.users}>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount}
                       pageSize={pageSize}
            />
            {
                users.map((user) => {
                    return <User user={user}
                                 key={user.id}
                                 followingInProgress={followingInProgress}
                                 unfollow={unfollow}
                                 follow={follow}
                    />
                })
            }
        </div>
    )
}

export default Users
