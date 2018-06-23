/**
 * Normalizes an integer to only contain digits
 * @param {string} value The current value being entered in
 * @param {string} previousValue The previous value
 * @returns {string} Returns the value, adding the elements of the recommended format
 */
const NormalizeInteger = value => {
  if (!value) {
    return value;
  }
  return value.replace(/[^\d]/g, '');
};

export default NormalizeInteger;
