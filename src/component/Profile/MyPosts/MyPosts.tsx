import React from "react";
import Style from './MyPosts.module.scss'
import Post from "./Posts/Post";
import MyPostsReduxForm, {AddPostFormValuesType} from "./MyPostsForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {actions} from "../../../redux/profile-reducer";

const MyPosts: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const posts = useSelector((state: AppStateType) => state.profilePage.posts)

    const postsElements = [...posts]
        .reverse()
        .map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    const addNewPosts = (values: AddPostFormValuesType) => {
        dispatch(actions.addPostActionCreator(values.posts))
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
