import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Button, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as Yup from 'yup';
function PhotoForm(props) {
    const {initialValues, isAddMode} = props;
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),
        categoryId: Yup.number().required('This field is required.').nullable(),
        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required'),
            otherwise: Yup.string().notRequired(),
        })
    });
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log(values, errors, touched);
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Alone Wolf ..."
                        />
                        <FastField
                            name="categoryId"
                            component={SelectField}

                            options={PHOTO_CATEGORY_OPTIONS}
                            label="Category"
                            placeholder="Your Category??"
                        />
                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"

                        />

                        <FormGroup>
                            <Button type="submit" color={isAddMode ? "primary" : "success"}>
                                {isSubmitting && <Spinner size="sm" color="dark"/>}    
                                {isAddMode ?  'Add a album' : 'Edit'}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    )
}

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
}
PhotoForm.defaultProps = {
    onSubmit: null,
}

export default PhotoForm;

