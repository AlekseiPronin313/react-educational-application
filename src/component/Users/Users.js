import React from "react";
import Style from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props}) => {
    return (
        <div className={Style.users}>
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