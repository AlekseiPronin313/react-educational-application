import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {sendMessage} from "../../../redux/chat-reducer";
import Style from '../Chat.module.scss'

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)

    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        // @ts-ignore
        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <div className={Style.container}>
                <textarea className={Style.input} onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
                <button className={Style.button} disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
        </div>
    )
}

export default AddMessageForm
