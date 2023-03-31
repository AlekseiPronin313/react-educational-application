import React from "react";
import {ChatMessageType} from "../../../api/chat-api";

const ChatMessage: React.FC<{ message: ChatMessageType }> = React.memo(({message}) => {
    return (
        <div>
            <img style={{width: '40px'}} src={message.photo} alt={'img'}/>
            <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
})

export default ChatMessage
