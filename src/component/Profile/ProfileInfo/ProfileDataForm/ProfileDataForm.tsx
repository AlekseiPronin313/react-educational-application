import React from "react";
import Style from "./ProfileDataForm.module.scss";
import {Input} from "../../../common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({
                                                                                              handleSubmit,
                                                                                              profile,
                                                                                              error
                                                                                          }) => {
    return (
        <div className={Style.box}>
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
                            <span className={Style.contexts}>{key}</span> : <Field className={Style.input}
                                                                                   placeholder={key}
                                                                                   name={'contacts.' + key}
                                                                                   component={Input}/>
                        </div>
                    })
                }
                <button className={Style.button_save}>Save</button>
            </form>
        </div>
    )
}

const ProfileReduxForm = reduxForm<ProfileType, PropsType>({
    form: 'edit-profile',
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileDataForm)

export default ProfileReduxForm
