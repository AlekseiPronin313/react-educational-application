import React from "react";
import {Field, Form, Formik} from "formik";

const userSerchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
type UsersSerchFormType = {
    term: string
}
export const UsersSerchForm = () => {

    const submit = (values: UsersSerchFormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {

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
