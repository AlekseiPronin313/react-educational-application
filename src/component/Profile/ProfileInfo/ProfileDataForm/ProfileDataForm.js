import React from "react";
import Style from "./ProfileDataForm.module.css";
import {Input} from "../../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error, setEditMode}) => {
    const backForm = () => {
        setEditMode(false)
    }

    return (
        <div className={Style.box}>
            <div className={Style.box_top}>
                <button className={Style.button} onClick={backForm}>{"<"}</button>
                <h2 className={Style.text_h2}>Edit Information</h2>
            </div>
                {error && <div className={Style.formSummaryError}>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div><span className={Style.contexts}>Full name:</span>
                        <Field className={Style.input}
                               placeholder={'Full Name'}
                               name={'fullName'}
                               component={Input}/>
                    </div>
                    <div><span className={Style.contexts}>About me:</span>
                        <Field className={Style.input}
                               placeholder={'About me'}
                               name={'aboutMe'}
                               component={Input}/>
                    </div>
                    <div className={Style.checkbox}><span className={Style.contexts}>Looking for a job:</span>
                        <Field className={Style.input}
                               name={'lookingForAJob'}
                               component='input'
                               type={'checkbox'}/>
                    </div>
                    <div><span className={Style.contexts}>My professional skills:</span>
                        <Field className={Style.input}
                               placeholder={'My professional skills:'}
                               name={'lookingForAJobDescription'}
                               component={Input}/>
                    </div>
                    {
                        Object.keys(profile.contacts).map(key => {
                            return <div key={key}>
                                <span className={Style.contexts}>{key}</span> : <Field className={Style.input} placeholder={key} name={'contacts.' + key} component={Input}/>
                            </div>
                        })
                    }
                    <button className={Style.button_save}>Save</button>
                </form>
        </div>
    )
}

const ProfileReduxForm = reduxForm({form: 'edit-profile', enableReinitialize: true, destroyOnUnmount: false }) (ProfileDataForm)

export default ProfileReduxForm