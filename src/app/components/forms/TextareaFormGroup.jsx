import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

const TextFormGroup = ({
  disabled,
  input,
  label,
  placeholder,
  maxLength,
  autoComplete,
  className,
  inputClassName,
  id,
  autoFocus,
  meta: { touched, error },
}) => (
  <div className={cn('form-group', { 'has-error': touched && error }, className)}>
    <label htmlFor={id || input.name}>{label}</label>
    <textarea
      {...input}
      id={id || input.name}
      disabled={disabled}
      maxLength={maxLength}
      autoComplete={autoComplete}
      className={cn('form-control', inputClassName)}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
    <div className="help-block">{touched && error}</div>
  </div>
);

TextFormGroup.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  maxLength: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  autoFocus: PropTypes.bool,
};

export default TextFormGroup;
