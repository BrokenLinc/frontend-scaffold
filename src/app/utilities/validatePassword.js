import React from 'react';
import { REGEX_PATTERN } from 'app/constants';
/**
 * Validates the password based on the set rules for the site returning an error if found
 * @param {string} password - The password to validate
 * @param {Object} username - The username that is tied to the password to confirm they are not the same
 * @return {Object} Any validation errors are returned as a string, otherwise it returns null
 */
const validatePassword = (password, username) => {
  const text = 'Please review security requirements.';
  if (
    !password ||
    password.length < 6 ||
    password === username ||
    !password.match(/[A-Z]/) ||
    !password.match(/[a-z]/) ||
    !password.match(REGEX_PATTERN.ALLOWED_PASSWORD_SYMBOLS) ||
    !password.match(/[0-9]/) ||
    password.match(REGEX_PATTERN.DISALLOWED_PASSWORD_CHARACTERS)
  ) {
    return <span> {text} </span>;
  }
  return null;
};
export default validatePassword;
