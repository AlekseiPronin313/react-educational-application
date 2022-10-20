import React from "react";
import Style from './MyPosts.module.css'
import Post from "./Posts/Post";

const postsData = [
    {id: 1, message: 'hi', likesCount: 12},
    {id: 2, message: 'hey', likesCount: 2},
    {id: 3, message: 'da', likesCount: 7},
    {id: 4, message: 'yes', likesCount: 33},
]

const MyPosts = () => {
return (
    <div>
        my post
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button className={Style.button}>Add Post</button>
        </div>
        <Post posts={postsData}/>
    </div>
)
}

export default MyPosts