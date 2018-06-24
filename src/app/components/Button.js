import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Button = ({ className, children, color, disabled, style, onClick, outline, size, solid, type }) => (
  <button
    type={type}
    className={cn('btn', { 'btn-outline': solid ? false : outline, [`btn-${size}`]: size, [`btn-${color}`]: color }, className)}
    style={style}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  size: PropTypes.string,
  solid: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  outline: true,
  type: 'button',
};

export default Button;
