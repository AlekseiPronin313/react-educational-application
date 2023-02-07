import React from "react";
import Style from './MyPosts.module.scss'
import {reduxForm, Field} from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators";
import {Input} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(2000)

const MyPostsForm = (props) => {
    return (
        <form className={Style.box} onSubmit={props.handleSubmit}>
            <div className={Style.box_input}>
                <Field className={Style.input}
                       name={'posts'}
                       component={Input}
                       placeholder="What's new?"
                       validate={[required, maxLength]}
                />
            </div>
            <button className={Style.button} >Add Post</button>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'myPosts'}) (MyPostsForm)


export default MyPostsReduxForm
