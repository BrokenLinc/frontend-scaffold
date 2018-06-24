import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Alert = ({ className, children, color, style }) => (
  <div className={cn('alert', { [`alert-${color}`]: color }, className)} style={style}>
    {children}
  </div>
);

Alert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  color: PropTypes.string,
  style: PropTypes.object,
};

export default Alert;
