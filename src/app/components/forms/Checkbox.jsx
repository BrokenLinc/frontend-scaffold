import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

const Checkbox = ({ children, disabled, input, id, label, meta: { touched, error } }) => (
  <div className="custom-control custom-checkbox">
    <input
      {...input}
      disabled={disabled}
      type="checkbox"
      checked={!!input.value}
      className={cn('custom-control-input', { 'is-invalid': touched && error })}
      id={id || input.name}
    />
    {label && (
      <label className="custom-control-label" htmlFor={id || input.name}>
        {label}
      </label>
    )}
    {children}
  </div>
);

Checkbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  disabled: PropTypes.bool,
  input: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  meta: PropTypes.object,
};

export default Checkbox;
