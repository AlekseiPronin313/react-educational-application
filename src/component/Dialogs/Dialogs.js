import React from "react";
import Style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

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
            <div className={Style.dialogs_items}>
                <DialogItem props={props.props}/>
            </div>
            <div className={Style.messages}>
                <div>
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
        </div>
    )
}

export default Dialogs