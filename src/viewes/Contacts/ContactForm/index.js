import React from 'react';
import { object, func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import renderField from '../../../shared/field';
import { email, minValue, phoneNumber, required } from '../../../utils/validations';
import { BTN_ACTIONS } from '../../../utils/constants';
import { FormRow, FormGroup, Button } from '../../../globalStyles';
import { StyledContactForm, GridCloumn } from '../styles';

let ContactForm = ({ contactForm, handleSubmit }) => (
  <StyledContactForm>
    <h2>Add Contact</h2>
    <form onSubmit={handleSubmit}>
      <FormRow>
        <GridCloumn span={6}>
          <label>First Name</label>
          <Field
            type="text"
            name="firstName"
            placeholder="First Name"
            component={renderField}
            validate={[required, minValue(3)]}
          />
        </GridCloumn>
        <GridCloumn span={6}>
          <label>Last Name</label>
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
        <label>Contact Number</label>
        <Field
          type="text"
          name="mobile"
          placeholder="+923227901620"
          component={renderField}
          validate={[required, phoneNumber]}
        />
      </FormGroup>
      <FormGroup>
        <label>Email</label>
        <Field type="email" name="email" placeholder="Email" component={renderField} validate={[required, email]} />
      </FormGroup>

      <Button success type="submit">
        {contactForm !== null ? BTN_ACTIONS.UPDATE : BTN_ACTIONS.ADD}
      </Button>
    </form>
  </StyledContactForm>
);

ContactForm.propTypes = {
  contactForm: object,
  handleSubmit: func.isRequired,
};

ContactForm = reduxForm({
  form: 'addContact',
})(ContactForm);

ContactForm = connect(({ contacts }) => ({
  initialValues: contacts.contactForm,
  enableReinitialize: true,
}))(ContactForm);
export default ContactForm;
