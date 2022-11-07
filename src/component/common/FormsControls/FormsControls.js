import React from "react";
import Style from './FormsControls.module.css'

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={Style.form_control + " " + (hasError ? Style.error : '')}>
            <input {...input} {...props}/>
            {hasError && <span className={Style.span}>{meta.error}</span>}
        </div>
    )
}