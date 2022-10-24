import React from "react";
import Style from './MyPosts.module.css'
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    const newPostRef = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const postChange = () => {
        let text = newPostRef.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

return (
    <div>
        my post
        <div className={Style.box}>
            <div className={Style.box_input}>
                <input className={Style.input}
                       onChange={postChange}
                       ref={newPostRef}
                       value={props.newPostText}
                       placeholder="What's new?">

                </input>
            </div>
            <button className={Style.button} onClick={addPost}>Add Post</button>
        </div>
        <Post props={props.props}/>
    </div>
)
}

export default MyPosts