import React from "react";
import Style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import img_avatar from './../../../assets/image/img_avatar.png'
import ProfileStatus from "./Status/ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={Style.profile}>
                <div className={Style.profile_box}>
                    <div className={Style.box_img}>
                        <img className={Style.img}
                             src={profile.photos.large != null ? profile.photos.large : img_avatar}
                             alt={'avatar'}/>
                    </div>
                    <div className={Style.box_info}>
                        <h2 className={Style.name}>{profile.fullName}</h2>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                </div>
            </div>
            <div className={Style.info}>
                <h2 className={Style.text}>Contact Information</h2>
                <div className={Style.contacts_box}>
                    {
                        profile.contacts.github != null ? <p>GitHub: {profile.contacts.github}</p> : ''
                    }
                    {
                        profile.contacts.fcebook != null ? <p>Facebook: {profile.contacts.fcebook}</p> : ''
                    }
                    {
                        profile.contacts.instagram != null ? <p>Instagram: {profile.contacts.instagram}</p> : ''
                    }
                    {
                       profile.contacts.twitter != null ? <p>MainLink: {profile.contacts.twitter}</p> : ''
                    }
                    {
                       profile.contacts.mainLink != null ? <p>Twitter: {profile.contacts.mainLink}</p> : ''
                    }
                    {
                        profile.contacts.vk != null ? <p>ВКонтакте: {profile.contacts.vk}</p> : ''
                    }
                    {
                        profile.contacts.website != null ? <p>Website: {profile.contacts.website}</p> : ''
                    }
                    {
                        profile.contacts.youtube != null ? <p>YouTube: {profile.contacts.youtube}</p> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export  default ProfileInfo