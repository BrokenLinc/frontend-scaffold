import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

const TextFormGroup = ({
  input,
  label,
  children,
  placeholder,
  type,
  maxLength,
  disabled,
  readOnly,
  autoComplete,
  className,
  addOnPrepend,
  addOnAppend,
  inputClassName,
  id,
  autoFocus,
  hasSplitFeedback,
  meta: { touched, error },
}) => {
  let inputElement = (
    <input
      {...input}
      id={id || input.name}
      maxLength={maxLength}
      autoComplete={autoComplete}
      disabled={disabled}
      readOnly={readOnly}
      type={type}
      className={cn('form-control', { 'is-invalid': touched && error }, inputClassName)}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );

  if (addOnPrepend || addOnAppend) {
    inputElement = (
      <div className="input-group">
        {addOnPrepend ? <span className="input-group-addon">{addOnPrepend}</span> : null}
        {inputElement}
        {addOnAppend ? <span className="input-group-addon">{addOnAppend}</span> : null}
      </div>
    );
  }

  return (
    <div className={cn('form-group', className)}>
      {label && <label htmlFor={id || input.name}>{label}</label>}
      {inputElement}
      {children}
      <div className={cn('invalid-feedback', { 'w-auto float-right': hasSplitFeedback })}>{touched && error}</div>
    </div>
  );
};

TextFormGroup.propTypes = {
  children: PropTypes.node,
  input: PropTypes.object,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  meta: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  addOnPrepend: PropTypes.string,
  addOnAppend: PropTypes.string,
  inputClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  autoFocus: PropTypes.bool,
  hasSplitFeedback: PropTypes.bool,
};

export default TextFormGroup;
