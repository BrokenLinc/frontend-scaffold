import { forEach } from 'lodash';

const errorRequiredFields = (values, requiredFields) => {
  const errors = {};
  forEach(requiredFields, field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export default errorRequiredFields;
