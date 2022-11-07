import React from "react";
import Style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import LoginReduxForm from "./DialogsForm";

const Dialogs = (props) => {
    const addNewMessage = (values) => {
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