import React from "react";
import Style from './FormsControls.module.scss'
import classNames from "classnames";
import {WrappedFieldProps} from "redux-form";

type PropsType = {
    meta: {
        touched: boolean
        error: string
    }
}

export const Input: React.FC<PropsType & WrappedFieldProps> = ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error

    return (
        <div className={classNames(Style.form_control, (hasError ? Style.error : ''))}>
            <input {...input} {...props}/>
            {hasError && <span className={Style.span}>{error}</span>}
        </div>
    )
}
