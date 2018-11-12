import { isEmail, isLength, isMobilePhone } from 'validator';
/*
Validates the field is not empty.
*/
export const required = (value) => (value || typeof value === 'number' ? undefined : '*Required');
/*
Validates the field minimum length.
*/
export const minValue = (min) => (value) =>
  isLength(value, { min }) ? undefined : `Should be more than ${min} characters.`;
/*
Validates the field maximum length.
*/
export const maxValue = (max) => (value) =>
  isLength(value, { max }) ? undefined : `Should be less than ${max} characters.`;
/*
Validates the standard email format.
*/
export const email = (value) => (isEmail(value) ? undefined : 'Invalid email address.');
/*
Validates the mobile phone format.
*/
export const phoneNumber = (value) =>
  isMobilePhone(value, ['en-PK'], ['strictMode'])
    ? undefined
    : 'Invalid phone number, must be according to the format(+921111111111).';
