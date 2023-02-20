import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";

const userSerchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
export const UsersSerchForm: React.FC<PropsType> = (props) => {

    const submit = (values: FilterType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
        props.onFilterChanged(values)
        setSubmitting(false)
    }

    return <div >
        <Formik
            initialValues={{term: ''}}
            validate={userSerchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}
