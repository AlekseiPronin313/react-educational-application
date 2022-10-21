import React from "react";
import Style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const [isText, setText] = React.useState('')
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
                    <input className={Style.input} placeholder="Enter your message" onChange={(event) => setText(event.target.value)}/>
                    <button className={Style.button} onClick={() => alert(isText)}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs