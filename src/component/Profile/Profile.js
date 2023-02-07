import React from "react";
import Style from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <main className={Style}>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile
