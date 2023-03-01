import React from "react";
import Style from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import LoginReduxForm from "./DialogsForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/dialogs-reducer";

export type NewMessageFormType = {
    dialogs: string
}

const Dialogs: React.FC = () => {
    const dispatch = useDispatch()
    const dialogsPage = useSelector((state: AppStateType) => state.dialogsPage)


    const addNewMessage = (values: NewMessageFormType) => {
        dispatch(actions.sendMessage(values.dialogs))
    }

    const message = [...dialogsPage.messages]
        .map(message => <Message key={message.id} message={message.message}/>)

    const dialogs = [...dialogsPage.dialogs]
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
