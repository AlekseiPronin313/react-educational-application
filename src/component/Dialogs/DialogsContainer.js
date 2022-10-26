import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const messageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
       <Dialogs updateNewMessageBody={messageChange}
                sendMessage={addMessage}
                dialogsPage={state.dialogsPage}
                newMessageText={state.dialogsPage.newMessageText}
       />
    )
}

export default DialogsContainer