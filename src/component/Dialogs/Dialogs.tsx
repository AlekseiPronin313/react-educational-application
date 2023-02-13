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
    dialogs : string
}

const Dialogs: React.FC<PropsType> = (props) => {

    const addNewMessage = (values: NewMessageFormType) => {
        props.sendMessage(values.dialogs)
    }

    return (
        <div className={Style.dialogs}>
            <div className={Style.dialogs_items}>
                <DialogItem props={props.dialogsPage.dialogs}/>
            </div>
            <div className={Style.messages}>
                <div className={Style.box_message}>
                    <Message props={props.dialogsPage.messages}/>
                </div>
                    <LoginReduxForm onSubmit={addNewMessage}
                    />
            </div>
        </div>
    )
}

export default Dialogs
