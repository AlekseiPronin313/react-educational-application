import React from "react";
import Style from './Login.module.scss'
import LoginReduxForm from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

export interface LoginFormValuesType {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        // @ts-ignore
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if(isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={Style.login}>
            <h1 className={Style.text}>Login</h1>
           <LoginReduxForm  onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

export default Login
