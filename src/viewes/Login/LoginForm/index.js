import React from 'react';
import { string, func, bool } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import renderField from '../../../shared/field';
import { email, required } from '../../../utils/validations';
import { BTN_ACTIONS } from '../../../utils/constants';
import { Error } from '../../../globalStyles';
import { LoginButton, LoginCard, CardBody, CardTitle, StyledLoginForm, FormLabelGroup } from '../styles';

const LoginForm = ({ error, handleSubmit, submitting }) => (
  <LoginCard>
    <CardBody>
      <CardTitle>{BTN_ACTIONS.LOGIN}</CardTitle>
      <StyledLoginForm onSubmit={handleSubmit}>
        <FormLabelGroup>
          <Field type="email" name="email" label="Email" component={renderField} validate={[required, email]} />
        </FormLabelGroup>
        <FormLabelGroup>
          <Field type="password" name="password" label="Password" component={renderField} validate={[required]} />
        </FormLabelGroup>
        <Error> {error} </Error>
        <LoginButton primary type="submit" disabled={submitting || error}>
          Sign in
        </LoginButton>
      </StyledLoginForm>
    </CardBody>
  </LoginCard>
);

LoginForm.propTypes = {
  error: string,
  handleSubmit: func.isRequired,
  submitting: bool.isRequired,
};

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
