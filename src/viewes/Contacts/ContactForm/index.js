import React from 'react';
import { object, func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { BTN_ACTIONS } from '../../../utils/constants';
import { FormRow, FormGroup, Button, StyledField } from '../../../globalStyles';
import { StyledContactForm, GridCloumn } from '../styles';

const ContactForm = ({ contactForm, handleSubmit }) => (
  <StyledContactForm>
    <h2>Add Contact</h2>
    <form onSubmit={handleSubmit}>
      <FormRow>
        <GridCloumn span={6}>
          <label>First Name</label>
          <Field type="text" name="firstName" placeholder="First Name" component={StyledField} />
        </GridCloumn>
        <GridCloumn span={6}>
          <label>Last Name</label>
          <Field type="text" name="lastName" placeholder="Last Name" component={StyledField} />
        </GridCloumn>
      </FormRow>
      <FormGroup>
        <label>Contact Number</label>
        <Field type="text" name="mobile" placeholder="+92 322 7901620" component={StyledField} />
      </FormGroup>
      <FormGroup>
        <label>Email</label>
        <Field type="email" name="email" placeholder="Email" component={StyledField} />
      </FormGroup>

      <Button success type="submit">
        {contactForm.id ? BTN_ACTIONS.UPDATE : BTN_ACTIONS.ADD}
      </Button>
    </form>
  </StyledContactForm>
);

ContactForm.propTypes = {
  contactForm: object.isRequired,
  handleSubmit: func.isRequired,
};

export default reduxForm({
  form: 'addContact',
})(ContactForm);
