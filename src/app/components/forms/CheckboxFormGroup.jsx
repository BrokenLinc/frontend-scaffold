import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import Checkbox from './Checkbox';

const CheckboxFormGroup = props => {
  const {
    children,
    className,
    meta: { touched, error },
  } = props;

  return (
    <div className={cn('form-group', className)}>
      <Checkbox {...props}>
        {children}
        <div className="invalid-feedback">{touched && error}</div>
      </Checkbox>
    </div>
  );
};

CheckboxFormGroup.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

export default CheckboxFormGroup;
