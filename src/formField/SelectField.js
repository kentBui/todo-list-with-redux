import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

function SelectField(props) {
  const { field, type, label } = props;
  const { name, value, onChange, onBlur } = field;
  return (
    <FormGroup>
      <Label className="sr-only">{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      >
        <option value="0">Small</option>
        <option value="1">Medium</option>
        <option value="2">High</option>
      </Input>
    </FormGroup>
  );
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SelectField;
