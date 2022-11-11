import React from "react";
import Style from './Users.module.css'
import img_avatar from './../../assets/image/img_avatar.png'
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={Style.users_box}>
            <NavLink className={Style.link} to={'/profile/' + user.id}>
                <img className={Style.img}
                     src={user.photos.small != null ? user.photos.small : img_avatar} alt={'Avatar'}/>
            </NavLink>
            <div className={Style.box}>
                <div className={Style.box_info}>
                    <p className={Style.name}>{user.name}</p>
                    <p className={Style.status}>{user.status}</p>
                </div>
                <div className={Style.button_box}>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      className={Style.button}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      className={Style.button}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default User