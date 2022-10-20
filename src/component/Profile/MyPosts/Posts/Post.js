import React from "react";
import Style from './Post.module.css';

const Post = (props) => {
    return (
        props.posts.map((post, id) => {
            return (
                <div key={id}>
                    <img className={Style.img} src='https://img2.akspic.ru/previews/5/8/2/8/6/168285/168285-astronavt-risovanie-kosmos-kosmicheskoe_prostranstvo-multfilm-500x.jpg' alt='post_img'/>
                    {post.message}
                    <div>
                        <span>Like: {post.likesCount}</span>
                    </div>
                </div>
            )
        })
    )
}

export default Post