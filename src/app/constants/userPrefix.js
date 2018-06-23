import { map } from 'lodash';

// Changing the order of these enums may change the order they appear in the UI
const USER_PREFIX = {
  MISTER: 'Mr',
  MS: 'Ms',
  MISS: 'Miss',
  MRS: 'Mrs',
  DOCTOR: 'Dr',
  ATTORNEY: 'Atty',
  HONORABLE: 'Hon',
  PROFESSOR: 'Prof',
  PRESIDENT: 'Pres',
  VICE_PRESIDENT: 'VP',
  GOVERNOR: 'Gov',
  OFFICER: 'Ofc',
};

export const ARRAY_OF_ALL =  map(USER_PREFIX, (label, value) => ({ label, value: label }));

export default USER_PREFIX;
