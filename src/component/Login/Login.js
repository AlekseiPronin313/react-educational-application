import React from "react";
import Style from './Login.module.css'
import LoginReduxForm from "./LoginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={Style.login}>
            <h1>Login</h1>
           <LoginReduxForm  onSubmit={onSubmit}/>
        </div>
    )
}

export default Login