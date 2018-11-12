import React, { Fragment } from 'react';
import { VIEWS } from '../../utils/constants';
import { FormInput, Error } from '../../globalStyles';
import { TodoFormInput } from '../../viewes/Todos/styles';

const renderField = ({ input, type, label, placeholder, forComponent, meta: { touched, error, warning } }) => (
  <Fragment>
    {forComponent === VIEWS.TODOS ? (
      <TodoFormInput
        {...input}
        placeholder={touched && error ? error : placeholder}
        error={touched && error}
        type={type}
      />
    ) : (
      <Fragment>
        <FormInput {...input} placeholder={placeholder} type={type} />
        <label>{label}</label>
        {touched && ((error && <Error>{error}</Error>) || (warning && <span>{warning}</span>))}
      </Fragment>
    )}
  </Fragment>
);

export default renderField;
