import React from "react";
import Style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main className={Style}>
            <ProfileInfo/>
            <MyPosts
                props={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}/>
        </main>
    )
}

export default Profile