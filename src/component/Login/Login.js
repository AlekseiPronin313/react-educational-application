import React from "react";
import Style from './Login.module.css'
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={Style.login}>
            <h1 className={Style.text}>Login</h1>
           <LoginReduxForm  onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)