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

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = React.memo(({addPost, posts}) => {

    const postsElements = [...posts]
        .reverse()
        .map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    const addNewPosts = (values: AddPostFormValuesType) => {
        addPost(values.posts)
    }

    return (
        <div className={Style.myPosts}>
            my post
            <MyPostsReduxForm onSubmit={addNewPosts}/>
            {postsElements}
        </div>
    )
})

export default MyPosts
