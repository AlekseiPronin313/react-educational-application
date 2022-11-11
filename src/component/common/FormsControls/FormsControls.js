import React from "react";
import Style from './FormsControls.module.css'

export const Input = ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error

    return (
        <div className={Style.form_control + " " + (hasError ? Style.error : '')}>
            <input {...input} {...props}/>
            {hasError && <span className={Style.span}>{error}</span>}
        </div>
    )
}