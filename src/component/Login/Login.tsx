import React from "react";
import Style from './Login.module.scss'
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

interface MapStatePropsType {
    captchaUrl: string | null
    isAuth: boolean
}

interface MapDispatchPropsType {
    login: (email: string, password: string, rememberMe: boolean, captcha: any) => void
}

export interface LoginFormValuesType {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ( props ) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={Style.login}>
            <h1 className={Style.text}>Login</h1>
           <LoginReduxForm  onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)
