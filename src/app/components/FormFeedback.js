import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Icon } from 'app/components';
import faExclamationCircle from 'app/icons/faExclamationCircle';

const FormFeedback = ({ color, icon, message, visible }) => (
  <div className={cn('form-feedback-summary', { [`is-${color}`]: color })} style={{ opacity: visible ? 1 : 0 }}>
    <div className="form-feedb``ack-summary-icon">
      <Icon icon={icon} />
    </div>
    <div className="form-feedback-summary-message">{message}</div>
  </div>
);

FormFeedback.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.object,
  message: PropTypes.node,
  visible: PropTypes.bool,
};

FormFeedback.defaultProps = {
  icon: faExclamationCircle,
  visible: false,
  message: 'Something has gone wrong.',
};

export default FormFeedback;
