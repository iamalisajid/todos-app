/*
Validates the field is not empty.
*/
export const required = (value) => (value || typeof value === 'number' ? undefined : '*Required');
/*
Validates the field minimum length.
*/
export const minValue = (min) => (value) =>
  value && value.length < min ? `Must be at least ${min} characters.` : undefined;
/*
Validates the field maximum length.
*/
export const maxValue = (max) => (value) =>
  value && value.length < max ? `Should be less than ${max} characters.` : undefined;
/*
Validates the standard email format.
*/
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address.' : undefined;
/*
Validates the mobile phone format.
*/
export const phoneNumber = (value) =>
  value && !/^(\+)[0-9]{12}$/i.test(value)
    ? 'Invalid phone number, must be according to the format(+921111111111).'
    : undefined;
