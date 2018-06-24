import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { REGEX_PATTERN } from 'app/constants';

const InlinePasswordValidation = ({ password, username, isPasswordTouched }) => {
  if (!isPasswordTouched) {
    return <span />;
  }
  const fail = '';
  const pass = 'is-passed';
  let pwLength = fail;
  let pwUnDiff = fail;
  let pwHasUppercaseAndLowercase = fail;
  let pwHasSymbol = fail;
  let pwHasNumber = fail;
  if (password) {
    if (password.length >= 6) {
      pwLength = pass;
    }
    if (password !== username) {
      pwUnDiff = pass;
    }
    if (password.match(/[A-Z]/) && password.match(/[a-z]/)) {
      pwHasUppercaseAndLowercase = pass;
    }
    if (password.match(REGEX_PATTERN.ALLOWED_PASSWORD_SYMBOLS)) {
      pwHasSymbol = pass;
    }
    if (password.match(/[0-9]/)) {
      pwHasNumber = pass;
    }
  }
  if (pwHasNumber && pwHasSymbol && pwHasUppercaseAndLowercase && pwUnDiff && pwLength) {
    return (
      <div className="validation-requirement-list">
        <span className="validation-requirement is-passed">
          <i className="mdi validation-requirement__icon-status" />
          Strong Password
        </span>
      </div>
    );
  }
  return (
    <div className="validation-requirement-list">
      <span className={cn('validation-requirement', pwLength)}>
        <i className="mdi validation-requirement__icon-status" />
        Use at least 6 characters
      </span>
      <span className={cn('validation-requirement', pwHasUppercaseAndLowercase)}>
        <i className="mdi validation-requirement__icon-status" />
        Use upper case and lower case letters
      </span>
      <span className={cn('validation-requirement', pwHasSymbol)}>
        <i className="mdi validation-requirement__icon-status" />
        Use a symbol
      </span>
      <span className={cn('validation-requirement', pwHasNumber)}>
        <i className="mdi validation-requirement__icon-status" />
        Use a number
      </span>
      <span className={cn('validation-requirement', 'notification', pwUnDiff)}>
        <i className="mdi validation-requirement__icon-status" />
        Password cannot be the same as your username
      </span>
    </div>
  );
};
InlinePasswordValidation.propTypes = {
  password: PropTypes.string,
  username: PropTypes.string,
  isPasswordTouched: PropTypes.bool,
};
export default InlinePasswordValidation;
