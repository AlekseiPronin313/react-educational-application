import React from "react";
import Style from './Users.module.scss'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";
import {UsersSearchForm} from "./UsersSeachForm";
import {FilterType} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getPageSize, getTotalUsersCount} from "../../redux/users-selectors";

type PropsType = {
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({onPageChanged, users, ...props}) => {
    const dispatch = useDispatch()

    const totalItemsCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)



    return (
        <div className={Style.users}>
            <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount}
                       pageSize={pageSize}
            />
            {
                users.map((user) => {
                    return <User user={user}
                                 key={user.id}
                                 followingInProgress={props.followingInProgress}
                                 unfollow={props.unfollow}
                                 follow={props.follow}
                    />
                })
            }
        </div>
    )
}

export default Users
