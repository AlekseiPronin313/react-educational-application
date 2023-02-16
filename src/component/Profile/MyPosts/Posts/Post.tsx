import React from "react";
import Style from './Post.module.scss';

type PropsType = {
    message: string
    likesCount: number
}
const Post: React.FC<PropsType> = (props) => {
            return (
                <div >
                    <img className={Style.img} src='https://img2.akspic.ru/previews/5/8/2/8/6/168285/168285-astronavt-risovanie-kosmos-kosmicheskoe_prostranstvo-multfilm-500x.jpg' alt='post_img'/>
                    {props.message}
                    <div>
                        <span>Like: {props.likesCount}</span>
                    </div>
                </div>
            )
}

export default Post
