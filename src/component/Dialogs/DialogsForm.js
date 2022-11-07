import React from "react";
import Style from './Dialogs.module.css'
import {reduxForm, Field} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={Style.input}
                   name={'dialogs'}
                   component={'input'}
                   placeholder={"Enter your message"}
            />
            <button className={Style.button} >Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'newMessageBody'}) (AddMessageForm)

export default LoginReduxForm