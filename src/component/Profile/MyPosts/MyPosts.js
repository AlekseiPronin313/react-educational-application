import React from "react";
import Style from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {
    const newPostRef = React.createRef();

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    const postChange = () => {
        let text = newPostRef.current.value
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
        props.dispatch(action)
    }

return (
    <div>
        my post
        <div className={Style.box}>
            <div className={Style.box_input}>
                <input className={Style.input} onChange={postChange} ref={newPostRef} value={props.newPostText} placeholder="What's new?"></input>
            </div>
            <button className={Style.button} onClick={addPost}>Add Post</button>
        </div>
        <Post props={props.props}/>
    </div>
)
}

export default MyPosts