import React from "react";
import Style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import img_avatar from './../../../assets/image/img_avatar.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={Style.profile}>
            <div className={Style.profile_box}>
                <div className={Style.box_img}>
                    <img className={Style.img}
                         src={props.profile.photos.large != null ? props.profile.photos.large : img_avatar}/>
                </div>
                <div className={Style.box_info}>
                    <h2 className={Style.name}>{props.profile.fullName}</h2>
                    <p className={Style.status}>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>

    )
}

export  default ProfileInfo