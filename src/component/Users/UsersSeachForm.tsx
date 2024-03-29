import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import {getUsersFilter} from "../../redux/users-selectors";
import {useSelector} from "react-redux";

const userSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FormValuesType = {
    term: string, friend: string
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
    const filter = useSelector(getUsersFilter)
    const submit = (values: FormValuesType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
        const filter2: FilterType = {
            term: values.term,
            friend: values.friend === 'true'
                ? true
                : values.friend === 'false' ? false : null
        }

        props.onFilterChanged(filter2)
        setSubmitting(false)
    }

    return <div>
        <Formik
            enableReinitialize
            initialValues={{term: filter.term, friend: String(filter.friend)}}
            validate={userSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name='friend' as='select'>
                        <option value='null'>All</option>
                        <option value='true'>Only followed</option>
                        <option value='false'>Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})
