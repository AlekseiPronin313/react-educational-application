import React from "react";
import Style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    const newMessageRef = React.createRef()

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const messageChange = () => {
        const text =newMessageRef.current.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={Style.dialogs}>
            <div className={Style.messages}>
                <div className={Style.box_message}>
                    <Message props={props.props}/>
                </div>
                <div className={Style.box}>
                    <input className={Style.input}
                           placeholder="Enter your message"
                           onChange={messageChange}
                           ref={newMessageRef}
                           value={props.newMessageText}
                    />
                    <button className={Style.button} onClick={addMessage}>Submit</button>
                </div>
            </div>
            <div className={Style.dialogs_items}>
                <DialogItem props={props.props}/>
            </div>
        </div>
    )
}

export default Dialogs