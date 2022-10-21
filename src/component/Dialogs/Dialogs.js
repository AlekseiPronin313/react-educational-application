import React from "react";
import Style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={Style.dialogs}>
            <div className={Style.dialogs_items}>
                <DialogItem props={props.props}/>
            </div>
            <div className={Style.messages}>
                <Message props={props.props}/>
            </div>
        </div>
    )
}

export default Dialogs