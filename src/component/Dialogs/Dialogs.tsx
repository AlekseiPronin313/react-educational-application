import React from "react";
import Style from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import LoginReduxForm from "./DialogsForm";
import {InitialStateType} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormType = {
    dialogs: string
}

const Dialogs: React.FC<PropsType> = (props) => {

    const addNewMessage = (values: NewMessageFormType) => {
        props.sendMessage(values.dialogs)
    }

    const message = [...props.dialogsPage.messages]
        .map(message => <Message key={message.id} message={message.message}/>)

    const dialogs = [...props.dialogsPage.dialogs]
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    return (
        <div className={Style.dialogs}>
            <div className={Style.dialogs_items}>
                {dialogs}
            </div>
            <div className={Style.messages}>
                <div className={Style.box_message}>
                    {message}
                </div>
                <LoginReduxForm onSubmit={addNewMessage}
                />
            </div>
        </div>
    )
}

export default Dialogs
