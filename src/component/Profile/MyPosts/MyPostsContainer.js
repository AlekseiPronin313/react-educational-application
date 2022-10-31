import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostTextActionCreator,
    addPostActionCreator
}) (MyPosts)

export default MyPostsContainer