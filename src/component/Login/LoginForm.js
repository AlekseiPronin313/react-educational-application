import React from "react";
import Style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators";
import {Input} from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {
    return (
        <form className={Style.form} onSubmit={props.handleSubmit}>
            <Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/>
            <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

export default LoginReduxForm