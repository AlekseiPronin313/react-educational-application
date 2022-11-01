import React from "react";
import Style from './Users.module.css'
import img_avatar from './../../assets/image/img_avatar.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={Style.users}>
            <div className={Style.amount}>
                {
                    pages.map((amount, id) => {
                        return (
                            <span key={id}
                                  className={props.currentPage === amount ? Style.active_selectedPage : Style.selectedPage}
                                  onClick={(event) => {
                                      props.onPageChanged(amount)
                                  }}>{amount}</span>
                        )
                    })
                }
            </div>
            {
                props.users.map((user, id) => {
                    return (
                        <div className={Style.users_box} key={id}>
                            <NavLink className={Style.link} to={'/profile/' + user.id}>
                                <img className={Style.img}
                                     src={user.photos.small != null ? user.photos.small : img_avatar}/>
                            </NavLink>
                            <div className={Style.box}>
                                <div className={Style.box_info}>
                                    <p className={Style.name}>{user.name}</p>
                                    <div className={Style.location_box}>
                                        {/*<p className={Style.country}>{user.location.country}</p>*/}
                                        {/*<p className={Style.city}>{user.location.city}</p>*/}
                                    </div>
                                    <p className={Style.status}>{user.status}</p>
                                </div>
                                <div className={Style.button_box}>
                                    {
                                        user.followed
                                            ? <button className={Style.button} onClick={() => {
                                                props.unfollow(user.id)
                                            }}>Unfollow</button>
                                            : <button className={Style.button} onClick={() => {
                                                props.follow(user.id)
                                            }}>Follow</button>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users