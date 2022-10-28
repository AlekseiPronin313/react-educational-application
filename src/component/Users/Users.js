import React from "react";
import Style from './Users.module.css'

function Users(props) {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, imgUrl: 'https://img.amur.pro/blog/2022/07/465/bddf5fa2f38db7a4e9fe93f7728d52f9.jpg',
                followed: false, fullName: 'Dima',
                status: 'good', location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2, imgUrl: 'https://img.amur.pro/blog/2022/07/465/bddf5fa2f38db7a4e9fe93f7728d52f9.jpg',
                followed: true, fullName: 'Alexei',
                status: 'predately', location: {city: 'Ryan', country: 'Rossi'}
            },
            {
                id: 3, imgUrl: 'https://img.amur.pro/blog/2022/07/465/bddf5fa2f38db7a4e9fe93f7728d52f9.jpg',
                followed: false, fullName: 'Nikita',
                status: 'frendli', location: {city: 'Berlin', country: 'German'}
            }
        ])
    }

    return (
        <div className={Style.users}>
            {
                props.users.map((user, id) => {
                    return (
                        <div className={Style.users_box} key={id}>
                                <img className={Style.img} src={user.imgUrl}/>
                            <div className={Style.box}>
                                <div className={Style.box_info}>
                                    <p className={Style.name}>{user.fullName}</p>
                                    <div className={Style.location_box}>
                                        <p className={Style.country}>{user.location.country}</p>
                                        <p className={Style.city}>{user.location.city}</p>
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