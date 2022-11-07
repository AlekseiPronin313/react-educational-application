import React from "react";
import Style from './MyPosts.module.css'
import {reduxForm, Field} from "redux-form";

const MyPostsForm = (props) => {
    return (
        <form className={Style.box} onSubmit={props.handleSubmit}>
            <div className={Style.box_input}>
                <Field className={Style.input}
                       name={'posts'}
                       component={'input'}
                       placeholder="What's new?"
                />
            </div>
            <button className={Style.button} >Add Post</button>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'myPosts'}) (MyPostsForm)


export default MyPostsReduxForm