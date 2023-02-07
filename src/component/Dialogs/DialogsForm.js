import React from "react";
import Style from './Dialogs.module.scss'
import {reduxForm, Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength = maxLengthCreator(2000)

const AddMessageForm = (props) => {
    return (
        <form className={Style.box} onSubmit={props.handleSubmit}>
            <Field className={Style.input}
                   name={'dialogs'}
                   component={Input}
                   placeholder={"Enter your message"}
                   validate={[required, maxLength]}
            />
            <button className={Style.button} >Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'newMessageBody'}) (AddMessageForm)

export default LoginReduxForm
