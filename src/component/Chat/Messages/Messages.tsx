import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import ChatMessage from "../ChatMessage/ChatMessage";
import Style from '../Chat.module.scss'

const Messages: React.FC = () => {
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const [autoScrollIs, setAutoScrollIs] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.scrollHeight) < 300) {
            !autoScrollIs && setAutoScrollIs(true)
        } else {
            autoScrollIs && setAutoScrollIs(false)
        }
    }

    useEffect(() => {
        if (autoScrollIs) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])
    return (
        <div className={Style.messages} style={{height: '500px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m: any) => <ChatMessage key={m.id} message={m}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

export default Messages
