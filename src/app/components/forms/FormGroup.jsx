import { head, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

const FormGroup = ({ input, label, children, className, inputClassName, typeahead, meta: { touched, error } }) => {
  const wrapperProps = {};
  const inputProps = {};

  if (typeahead) {
    // split props on Typeahead between the wrapper and input
    Object.assign(wrapperProps, {
      className: cn({ 'is-invalid': touched && error }),
      defaultInputValue: input.value,
      onBlur: event => {
        input.onChange(event.target.value);
      },
      onChange: value => {
        if (!isEmpty(value)) {
          input.onChange(head(value).name);
        }
      },
    });
    Object.assign(inputProps, input, {
      className: cn(inputClassName, { 'is-invalid': touched && error }),
    });
    delete inputProps.value;
    delete inputProps.onBlur;
    delete inputProps.onFocus;
    delete inputProps.onChange;
    delete inputProps.onDragStart;
    delete inputProps.onDrop;
  } else {
    Object.assign(inputProps, input, {
      className: cn('form-control', inputClassName, { 'is-invalid': touched && error }),
    });
  }

  return (
    <div className={cn('form-group', className)}>
      {label && <label>{label}</label>}
      {children(inputProps, wrapperProps)}
      <div className="invalid-feedback">{touched && error}</div>
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.func,
  input: PropTypes.object,
  label: PropTypes.string,
  typeahead: PropTypes.bool,
  meta: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  inputClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

export default FormGroup;
