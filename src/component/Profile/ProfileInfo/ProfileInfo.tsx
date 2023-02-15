import React, {ChangeEvent, useState} from "react";
import Style from './ProfileInfo.module.scss'
import img_avatar from './../../../assets/image/img_avatar.png'
import ProfileStatus from "./Status/ProfileStatus";
import Contacts from "./Contacts/Contacts";
import ProfileReduxForm from "./ProfileDataForm/ProfileDataForm";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file : File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)

    const goToEditMode = () => {setEditMode(true)}

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    // if (!profile) {
    //     return <Paginator/>
    // }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
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
            {editMode ? <ProfileReduxForm
                    initialValues={profile}
                    onSubmit={onSubmit}
                    profile={profile}/>
                : <Contacts profile={profile}
                            isOwner={isOwner}
                            goToEditMode={goToEditMode}/>}
        </div>
    )
}

export  default ProfileInfo
