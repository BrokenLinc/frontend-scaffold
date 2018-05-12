import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

const Button = ({ color, outline }) => {
  const classes = cn(
    'btn',
    { 'is-outline': outline },
    { [`is-${color}`]: color },
    'min-w-8r'
  );
  return (
    <button className={classes}>Button</button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  outline: PropTypes.bool,
};

export default Button;
