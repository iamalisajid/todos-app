import React, { Fragment } from 'react';
import { MODULES } from '../../utils/constants';
import { FormInput, Error } from '../../globalStyles';
import { TodoFormInput } from '../../viewes/Todos/styles';

const renderField = ({ input, type, label, placeholder, forComponent, meta: { touched, error, warning } }) => (
  <Fragment>
    {forComponent === MODULES.TODOS ? (
      <TodoFormInput {...input} placeholder={error || placeholder} type={type} />
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
