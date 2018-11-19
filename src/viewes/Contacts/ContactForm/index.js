import React from 'react';
import { object, func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import renderField from '../../../shared/field';
import { email, minValue, phoneNumber, required } from '../../../utils/validations';
import { BTN_ACTIONS, FORM } from '../../../utils/constants';
import { FormRow, FormGroup, Button } from '../../../globalStyles';
import { StyledContactForm, GridCloumn } from '../styles';
import { CONTACT_ADD, CONTACT_FORM } from '../../../utils/copies';

let ContactForm = ({ contactForm, handleSubmit }) => (
  <StyledContactForm onSubmit={handleSubmit}>
    <h2>
      <FormattedMessage id="contact.header" defaultMessage={CONTACT_ADD} />
    </h2>
    <FormRow>
      <GridCloumn span={6}>
        <label>
          <FormattedMessage id="contact.firstName" defaultMessage={CONTACT_FORM.FIRST_NAME} />
        </label>
        <Field
          type="text"
          name="firstName"
          placeholder="First Name"
          component={renderField}
          validate={[required, minValue(3)]}
        />
      </GridCloumn>
      <GridCloumn span={6}>
        <label>
          <FormattedMessage id="contact.lastName" defaultMessage={CONTACT_FORM.LAST_NAME} />
        </label>
        <Field
          type="text"
          name="lastName"
          placeholder="Last Name"
          component={renderField}
          validate={[required, minValue(3)]}
        />
      </GridCloumn>
    </FormRow>
    <FormGroup>
      <label>
        <FormattedMessage id="contact.phone" defaultMessage={CONTACT_FORM.PHONE} />
      </label>
      <Field
        type="text"
        name="mobile"
        placeholder="+923227901620"
        component={renderField}
        validate={[required, phoneNumber]}
      />
    </FormGroup>
    <FormGroup>
      <label>
        <FormattedMessage id="contact.email" defaultMessage={CONTACT_FORM.EMAIL} />
      </label>
      <Field
        type="email"
        name="email"
        placeholder="Email"
        component={renderField}
        validate={[required, email]}
      />
    </FormGroup>

    <Button variant="success" type="submit">
      {contactForm !== null ? (
        <FormattedMessage id="update" defaultMessage={BTN_ACTIONS.UPDATE} />
      ) : (
        <FormattedMessage id="add" defaultMessage={BTN_ACTIONS.ADD} />
      )}
    </Button>
  </StyledContactForm>
);

ContactForm.propTypes = {
  contactForm: object,
  handleSubmit: func.isRequired,
};

ContactForm = reduxForm({
  form: FORM.CONTACT_ADD,
})(ContactForm);

ContactForm = connect(({ contacts }) => ({
  initialValues: contacts.contactForm,
  enableReinitialize: true,
}))(ContactForm);

export default ContactForm;
