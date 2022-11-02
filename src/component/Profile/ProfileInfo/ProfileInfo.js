import React from "react";
import Style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import img_avatar from './../../../assets/image/img_avatar.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={Style.profile}>
                <div className={Style.profile_box}>
                    <div className={Style.box_img}>
                        <img className={Style.img}
                             src={props.profile.photos.large != null ? props.profile.photos.large : img_avatar}
                             alt={'avatar'}/>
                    </div>
                    <div className={Style.box_info}>
                        <h2 className={Style.name}>{props.profile.fullName}</h2>
                        <p className={Style.status}>{props.profile.aboutMe}</p>
                    </div>
                </div>
            </div>
            <div className={Style.info}>
                <h2 className={Style.text}>Contact Information</h2>
                <div className={Style.contacts_box}>
                    {
                        props.profile.contacts.github != null ? <p>GitHub: {props.profile.contacts.github}</p> : ''
                    }
                    {
                        props.profile.contacts.fcebook != null ? <p>Facebook: {props.profile.contacts.fcebook}</p> : ''
                    }
                    {
                        props.profile.contacts.instagram != null ?
                            <p>Instagram: {props.profile.contacts.instagram}</p> : ''
                    }
                    {
                        props.profile.contacts.twitter != null ? <p>MainLink: {props.profile.contacts.twitter}</p> : ''
                    }
                    {
                        props.profile.contacts.mainLink != null ? <p>Twitter: {props.profile.contacts.mainLink}</p> : ''
                    }
                    {
                        props.profile.contacts.vk != null ? <p>ВКонтакте: {props.profile.contacts.vk}</p> : ''
                    }
                    {
                        props.profile.contacts.website != null ? <p>Website: {props.profile.contacts.website}</p> : ''
                    }
                    {
                        props.profile.contacts.youtube != null ? <p>YouTube: {props.profile.contacts.youtube}</p> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export  default ProfileInfo