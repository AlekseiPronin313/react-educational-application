import React from "react";
import Style from './MyPosts.module.scss'
import Post from "./Posts/Post";
import MyPostsReduxForm, {AddPostFormValuesType} from "./MyPostsForm";
import {PostType} from "../../../types/types";

type PropsType = {
    profilePage: Array<PostType>
    addPost: (posts: string) => void
}

const MyPosts: React.FC<PropsType> = React.memo(props => {
    const addNewPosts = (values: AddPostFormValuesType) => {
        props.addPost(values.posts)
    }

    return (
        <div className={Style.myPosts}>
            my post
            <MyPostsReduxForm onSubmit={addNewPosts}/>
            <Post props={props.profilePage}/>
        </div>
    )
})

export default MyPosts
