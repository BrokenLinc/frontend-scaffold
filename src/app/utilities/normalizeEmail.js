/**
 * Normalizes an email address to not allow bad characters
 * @param {string} value The email to normalize
 * @returns {string} Returns the value, stripping all but valid characters for an email address
 */
const normalizeEmail = value => {
  if (!value) {
    return value;
  }

  return value.replace(/\s/g, '');
};

export default normalizeEmail;
