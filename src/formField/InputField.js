import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

function InputField(props) {
  const { field, form, type, label, placeholder } = props;
  const { name, value, onChange, onBlur } = field;

  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];

  return (
    <FormGroup>
      <Label className="sr-only">{label}</Label>
      <Input
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        //
        type={type}
        name={name}
        placeholder={placeholder}
        invalid={showErr}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
