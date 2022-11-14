import React from "react";
import Style from './ProfileInfo.module.css'
import img_avatar from './../../../assets/image/img_avatar.png'
import ProfileStatus from "./Status/ProfileStatus";
import Paginator from "../../common/Paginator/Paginator";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Paginator/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={Style.profile}>
                <div className={Style.profile_box}>
                    <div className={Style.box_img}>
                        <img className={Style.img}
                             src={profile.photos.large || img_avatar}
                             alt={'avatar'}/>
                        {isOwner && <div className={Style.button_box}>
                            <label className={Style.label} htmlFor='file'>Загрузка новой фотографии</label>
                            <input name="file" id='file' multiple className={Style.img_button} type={'file'}
                                   onChange={onMainPhotoSelected}/>
                        </div>
                            }
                    </div>
                    <div className={Style.box_info}>
                        <h2 className={Style.name}>{profile.fullName}</h2>
                        <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus}/>
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