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
import {useSearchParams} from "react-router-dom";

type PropsType = {}

const Users: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    const users = useSelector(getUsers)
    const totalItemsCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    useEffect(() => {
        const result: any = {}
        // @ts-ignore
        for (const [key, value] of searchParams.entries()) {
            let value2: any = +value
            if (isNaN(value2)) {
                value2 = value
            }
            if (value === 'true') {
                value2 = true
            } else if (value === 'false') {
                value2 = false
            }
            result[key] = value2
        }

        let actualPage = result.page || currentPage
        let term = result.term || filter.term

        let friend = result.friend || filter.friend
        if (result.friend === false) {
            friend = result.friend
        }

        const actualFilter = {friend, term}
        dispatch(requestUsers(actualPage, pageSize, actualFilter) as unknown as AnyAction)
    }, [])

    useEffect(() => {
        const term = filter.term
        const friend = filter.friend

        let urlQuery =
            (term === '' ? '' : `&term=${term}`)
            + (friend === null ? '' : `&friend=${friend}`)
            + (currentPage === 1 ? '' : `&page=${currentPage}`)

        setSearchParams(urlQuery)
    }, [filter, currentPage])

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
