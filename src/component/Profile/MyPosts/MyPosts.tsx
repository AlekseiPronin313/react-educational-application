import React from "react";
import Style from './MyPosts.module.scss'
import Post from "./Posts/Post";
import MyPostsReduxForm, {AddPostFormValuesType} from "./MyPostsForm";
import {PostType} from "../../../types/types";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (posts: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = React.memo(props => {
    const addNewPosts = (values: AddPostFormValuesType) => {
        props.addPost(values.posts)
    }

    return (
        <div className={Style.myPosts}>
            my post
            <MyPostsReduxForm onSubmit={addNewPosts}/>
            <Post props={props.posts}/>
        </div>
    )
})

export default MyPosts
