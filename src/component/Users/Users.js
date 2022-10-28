import React from "react";
import Style from './Users.module.css'
import axios from "axios";
import img_avatar from './../../assets/image/img_avatar.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div className={Style.users}>
                {
                    this.props.users.map((user, id) => {
                        return (
                            <div className={Style.users_box} key={id}>
                                <img className={Style.img}
                                     src={user.photos.small != null ? user.photos.small : img_avatar}/>
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
                                                    this.props.unfollow(user.id)
                                                }}>Unfollow</button>
                                                : <button className={Style.button} onClick={() => {
                                                    this.props.follow(user.id)
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
}

export default Users