import PropTypes from 'prop-types';
import React from 'react';

const HelpBlock = ({ meta: { submitFailed, touched, error } }) => (
  <div className="help-block">{submitFailed && touched && error}</div>
);

HelpBlock.propTypes = {
  meta: PropTypes.object.isRequired,
};

export default HelpBlock;
