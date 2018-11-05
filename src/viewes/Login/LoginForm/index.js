import React from 'react';
import { object, string, func } from 'prop-types';
import { BTN_ACTIONS } from '../../../utils/constants';
import { FormInput } from '../../../globalStyles';
import { LoginButton, LoginCard, CardBody, CardTitle, StyledLoginForm, FormLabelGroup, Error } from '../styles';

const LoginForm = ({ loginForm, error, handleInput, handleSubmit }) => (
  <LoginCard>
    <CardBody>
      <CardTitle>{BTN_ACTIONS.LOGIN}</CardTitle>
      <StyledLoginForm onSubmit={handleSubmit}>
        <FormLabelGroup>
          <FormInput type="email" name="email" value={loginForm.email} onChange={handleInput} />
          <label htmlFor="inputEmail">Email address</label>
        </FormLabelGroup>
        <FormLabelGroup>
          <FormInput type="password" name="password" value={loginForm.password} onChange={handleInput} />
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
  loginForm: object.isRequired,
  error: string,
  handleSubmit: func.isRequired,
  handleInput: func.isRequired,
};

export default LoginForm;
