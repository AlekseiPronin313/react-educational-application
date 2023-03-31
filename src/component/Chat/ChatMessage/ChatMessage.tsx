import React from "react";
import {ChatMessageType} from "../../../api/chat-api";
import Style from '../Chat.module.scss'

const ChatMessage: React.FC<{ message: ChatMessageType }> = React.memo(({message}) => {
    return (
        <div className={Style.chatMassage}>
            <div className={Style.box}>
                <img className={Style.img} src={message.photo} alt={'img'}/>
                <b className={Style.name}>{message.userName}</b>
            </div>
            <p className={Style.text}>
                {message.message}
            </p>
        </div>
    )
})

export default ChatMessage
