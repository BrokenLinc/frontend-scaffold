import normalizeCustomPhone from './normalizeCustomPhone';

/**
 * Normalizes a phone number to ensure the format of (___) ___-____
 * @param {string} value The current phone number being entered in
 * @param {string} previousValue The previous value for the phone number
 * @returns {string} Returns the value, adding the elements of the recommended format
 */
const normalizeExtensionlessPhone = (value, previousValue) => {
  return normalizeCustomPhone({
    allowExtension: false,
  })(value, previousValue);
};

export default normalizeExtensionlessPhone;
