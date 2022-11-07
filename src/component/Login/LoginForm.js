import React from "react";
import Style from './Login.module.css'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form className={Style.form} onSubmit={props.handleSubmit}>
            <Field placeholder={'Login'} name={'login'} component={'input'}/>
            <Field placeholder={'Password'} name={'password'} component={'input'}/>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

export default LoginReduxForm