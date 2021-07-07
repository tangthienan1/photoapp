import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import Select from 'react-select'
import { ErrorMessage } from 'formik'

function SelectField(props) {
    const {
        field, form,
        label, placeholder, options, disabled
    } = props
    // field from formik already exist onChange, onBlur, value, name
    const { name, value } = field;
    const { errors, touched } = form;
    const selectedOption = options.find(option => option.value === value);

    const handleSeletedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    const isError = errors[name] && touched[name];
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            {/* Select do not support invalid class, we have to create manually */}
            <Select id={name} {...field} value={selectedOption} onChange={handleSeletedOptionChange} isDisabled={disabled} options={options} placeholder={placeholder} className={isError && 'is-invalid'}></Select>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    disabled: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
}


SelectField.defaultProps = {
    label: '',
    placeholder: '',
    options: [],
    disabled: false
}

export default SelectField

