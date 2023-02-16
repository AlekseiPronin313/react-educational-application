import React from "react";
import Style from './Message.module.scss'

type PropsType = {
    message: string
}

const Message: React.FC<PropsType> = ({message}) => {
    return (
        <div className={Style.message}>
            {message}
        </div>
    )
}

export default Message
