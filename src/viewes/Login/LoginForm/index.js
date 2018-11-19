import React from 'react';
import { string, func, bool } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import renderField from '../../../shared/field';
import { email, required } from '../../../utils/validations';
import { BTN_ACTIONS, FORM, VIEWS } from '../../../utils/constants';
import { Error } from '../../../globalStyles';
import {
  LoginButton,
  LoginCard,
  CardBody,
  CardTitle,
  StyledLoginForm,
  FormLabelGroup,
} from '../styles';

const LoginForm = ({ error, handleSubmit, submitting }) => (
  <LoginCard>
    <CardBody>
      <CardTitle>
        <FormattedMessage id="login" defaultMessage={VIEWS.LOGIN} />
      </CardTitle>
      <StyledLoginForm onSubmit={handleSubmit}>
        <FormLabelGroup>
          <Field
            type="email"
            name="email"
            label="Email"
            component={renderField}
            validate={[required, email]}
          />
        </FormLabelGroup>
        <FormLabelGroup>
          <Field
            type="password"
            name="password"
            label="Password"
            component={renderField}
            validate={[required]}
          />
        </FormLabelGroup>
        <Error> {error} </Error>
        <LoginButton variant="primary" type="submit" disabled={submitting || error}>
          <FormattedMessage id="signin" defaultMessage={BTN_ACTIONS.SIGN_IN} />
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
  form: FORM.LOGIN_USER,
})(LoginForm);
