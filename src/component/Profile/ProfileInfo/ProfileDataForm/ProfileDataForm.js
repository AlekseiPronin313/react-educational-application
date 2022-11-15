import React from "react";
import Style from "./ProfileDataForm.module.css";
import {Input} from "../../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <div className={Style.box}>
                <h2 className={Style.text}>Edit Information</h2>
                <form className={Style.contacts_box} onSubmit={handleSubmit}>
                    <div>Full name: <Field placeholder={'Full Name'} name={'fullName'} component={Input}/></div>
                    <div>About me: <Field placeholder={'About me'} name={'aboutMe'} component={Input}/></div>
                    <div>Looking for a job: <Field name={'lookingForAJob'} component='input' type={'checkbox'}/></div>
                    <div>My professional skills:
                        <Field placeholder={'My professional skills:'}
                               name={'lookingForAJobDescription'} component={Input}/>
                    </div>
                    {
                        Object.keys(profile.contacts).map(key => {
                            return <div key={key}>
                                {key} : <Field placeholder={key} name={'contacts.' + key} component={Input}/>
                            </div>
                        })
                    }
                    {error && <div className={Style.formSummaryError}>{error}</div>
                    }
                    <button >save</button>
                </form>
        </div>
    )
}

const ProfileReduxForm = reduxForm({form: 'edit-profile', enableReinitialize: true, destroyOnUnmount: false }) (ProfileDataForm)

export default ProfileReduxForm