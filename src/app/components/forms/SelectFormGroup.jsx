import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { map } from 'lodash';

const SelectFormGroup = ({
  input,
  label,
  description,
  placeholder,
  className,
  onChange,
  disabled,
  options,
  optionValueProp,
  optionLabelProp,
  inputClassName,
  id,
  autoFocus,
  shouldInsertDefault,
  defaultLabel,
  meta: { touched, error },
}) => {
  const selectOptions = options.slice(0);
  if (shouldInsertDefault) {
    selectOptions.unshift({ [optionLabelProp]: defaultLabel });
  }
  return (
    <div className={cn('form-group', className)}>
      <label htmlFor={id || input.name}>{label}</label>
      {description}
      <select
        {...input}
        id={id || input.name}
        className={cn('custom-select', { 'is-invalid': touched && error }, inputClassName)}
        disabled={disabled}
        onChange={(...args) => {
          input.onChange(...args);
          if (onChange) {
            onChange(...args);
          }
        }}
        autoFocus={autoFocus}
      >
        {!!placeholder && <option value="">{placeholder}</option>}
        {map(selectOptions, (option, i) => (
          <option key={i} value={option[optionValueProp]}>
            {option[optionLabelProp]}
          </option>
        ))}
      </select>
      <div className="invalid-feedback">{touched && error}</div>
    </div>
  );
};

SelectFormGroup.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  description: PropTypes.node,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  options: PropTypes.any,
  optionValueProp: PropTypes.string,
  optionLabelProp: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inputClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  autoFocus: PropTypes.bool,
  shouldInsertDefault: PropTypes.bool,
  defaultLabel: PropTypes.string,
};

SelectFormGroup.defaultProps = {
  optionValueProp: 'value',
  optionLabelProp: 'label',
  defaultLabel: '',
};

export default SelectFormGroup;
