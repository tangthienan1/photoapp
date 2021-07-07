import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import { ErrorMessage } from 'formik';

function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props
    // field from formik already exist onChange, onBlur, value, name
    const { name } = field;
    const { errors, touched } = form;
    const isError = errors[name] && touched[name];
    return ( 
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input id={name} {...field} disabled={disabled} type={type} placeholder={placeholder} invalid={isError}></Input>
            {/* {isError && <FormFeedback>{errors[name]}</FormFeedback>} */}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.string,
}


InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

export default InputField

