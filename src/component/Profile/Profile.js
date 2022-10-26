import React from "react";
import Style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <main className={Style}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile