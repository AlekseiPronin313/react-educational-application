import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import Messages from "./Messages/Messages";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Chat: React.FC = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        // @ts-ignore
        dispatch(startMessagesListening())
        return () => {
            // @ts-ignore
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <div>
            {status === 'error' && <div>Some error occurred. Please refresh the page</div>}
            <>
                <Messages/>
                <AddMessageForm/>
            </>
        </div>
    )
}

export default Chat
