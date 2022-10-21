import React from "react";
import Style from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {
return (
    <div>
        my post
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button className={Style.button}>Add Post</button>
        </div>
        <Post props={props.props}/>
    </div>
)
}

export default MyPosts