import React from "react";
import Style from "../ProfileInfo.module.scss";
import button_editor from '../../../../assets/image/button-editor.svg'
import {ContactsType, ProfileType} from "../../../../types/types";

type PropsData = {
    contactTitle: string
    contactValue: string
}

export const ContactsData: React.FC<PropsData> = ({contactTitle, contactValue}) => {
    return (
        <h3 className={Style.text}>{contactTitle} : <span className={Style.text_contents}>{contactValue}</span></h3>
    )
}

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const Contacts: React.FC<PropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={Style.info}>
            <div className={Style.info_box}>
                <h2 className={Style.text_h2}>Contact Information</h2>
                {isOwner &&
                    <button className={Style.button} onClick={goToEditMode}><img src={button_editor} alt={'img'}/>
                    </button>}
            </div>
            <div className={Style.contacts_box}>
                <h3 className={Style.text}>About me: <span className={Style.text_contents}>{profile.aboutMe}</span></h3>
                <h3 className={Style.text}>Looking for a job: <span
                    className={Style.text_contents}>{profile.lookingForAJob ? 'yes' : 'no'}</span></h3>
                {
                    profile.lookingForAJob && <h3 className={Style.text}>
                        My professional skills: <span
                        className={Style.text_contents}>{profile.lookingForAJobDescription}</span>
                    </h3>
                }
                {
                    Object.keys(profile.contacts).map(key => {
                        return <ContactsData key={key} contactTitle={key}
                                             contactValue={profile.contacts[key as keyof ContactsType]}/>
                    })
                }
            </div>
        </div>
    )
}

export default Contacts
