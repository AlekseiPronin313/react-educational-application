import React from "react";
import Style from './MyPosts.module.css'
import Post from "./Posts/Post";
import MyPostsReduxForm from "./MyPostsForm";

const MyPosts = React.memo(props => {
    const addNewPosts = (values) => {
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