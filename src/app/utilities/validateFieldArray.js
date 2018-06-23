import { isEmpty } from 'lodash';
/**
 * Validates each item in an array of values, for use when validating redux-forms FieldArray
 * @param {Array} values - The array of values to validate
 * @param {Function} validate(value, error) - The validation function to run on each value in the array
 * @return {Object} Any validation errors are returned as an array, otherwise it returns null
 *
 * Example usage:
 *
 * const errors = {};
 * const phoneErrors = validateFieldArray(values.phones, (phone, errors) => {
 *    if (phone.number && !phone.type) {
 *      errors.type = 'Required';
 *    }
 *  });
 * phoneErrors && (errors.phones = phoneErrors);
 */

const validateFieldArray = (values, validate) => {
  const arrayErrors = [];
  values.forEach((value, index) => {
    if (value) {
      const errors = {};
      validate(value, errors);
      if (!isEmpty(errors)) {
        arrayErrors[index] = errors;
      }
    }
  });
  return arrayErrors.length ? arrayErrors : null;
};

export default validateFieldArray;
