import React from 'react';
import { string, func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { BTN_ACTIONS } from '../../../utils/constants';
import { StyledField } from '../../../globalStyles';
import { LoginButton, LoginCard, CardBody, CardTitle, StyledLoginForm, FormLabelGroup, Error } from '../styles';

const LoginForm = ({ error, handleSubmit }) => (
  <LoginCard>
    <CardBody>
      <CardTitle>{BTN_ACTIONS.LOGIN}</CardTitle>
      <StyledLoginForm onSubmit={handleSubmit}>
        <FormLabelGroup>
          <Field type="email" name="email" component={StyledField} />
          <label htmlFor="inputEmail">Email address</label>
        </FormLabelGroup>
        <FormLabelGroup>
          <Field type="password" name="password" component={StyledField} />
          <label htmlFor="inputEmail">Password</label>
        </FormLabelGroup>
        <Error> {error} </Error>

        <LoginButton primary type="submit">
          Sign in
        </LoginButton>
      </StyledLoginForm>
    </CardBody>
  </LoginCard>
);

LoginForm.propTypes = {
  error: string,
  handleSubmit: func.isRequired,
};

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
