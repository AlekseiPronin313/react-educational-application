import React from "react";
import Style from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {
    const newPostRef = React.createRef();

    const onAddPost = () => {
        props.addPostActionCreator()
    }

    const onPostChange = () => {
        let text = newPostRef.current.value
        props.updateNewPostTextActionCreator(text)
    }

return (
    <div>
        my post
        <div className={Style.box}>
            <div className={Style.box_input}>
                <input className={Style.input}
                       onChange={onPostChange}
                       ref={newPostRef}
                       value={props.profilePage.newPostText}
                       placeholder="What's new?">
                </input>
            </div>
            <button className={Style.button} onClick={onAddPost}>Add Post</button>
        </div>
        <Post props={props.profilePage}/>
    </div>
)}

export default MyPosts