import React from "react";
import Style from "../ProfileInfo.module.css";

export const ContactsData = ({contactTitle, contactValue}) => {
    return (
        <p >{contactTitle} : {contactValue}</p>
    )
}

const Contacts = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={Style.info}>
            <h2 className={Style.text}>Contact Information</h2>
            <div className={Style.contacts_box}>
                {isOwner && <button onClick={goToEditMode}>edit</button>}
                <p>About me: {profile.aboutMe}</p>
                <p>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</p>
                {
                    profile.lookingForAJob && <p>
                        My professional skills: {profile.lookingForAJobDescription}
                    </p>
                }
                {
                    Object.keys(profile.contacts).map(key => {
                        return <ContactsData key={key} contactTitle={key} contactValue={ profile.contacts[key]}/>
                    })
                }
            </div>
        </div>
    )
}

export default Contacts