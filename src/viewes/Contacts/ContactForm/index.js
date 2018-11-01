import React from 'react';
import { object, func } from 'prop-types';
import { BTN_ACTIONS } from '../../../utils/constants';
import { FormRow, FormGroup, FormInput, Button } from '../../../globalStyles';
import { StyledContactForm, FirstName, LastName } from '../styles';


const ContactForm = ({ contactForm, handleContactState, handleSubmit }) => (
  <StyledContactForm>
    <h2>Add Contact</h2>
    <form onSubmit={handleSubmit}>
      <FormRow>
        <FirstName>
          <label>First Name</label>
          <FormInput
            type="text"
            name="firstName"
            placeholder="First Name"
            value={contactForm.firstName}
            onChange={handleContactState}
          />
        </FirstName>
        <LastName>
          <label>Last Name</label>
          <FormInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={contactForm.lastName}
            onChange={handleContactState}
          />
        </LastName>
      </FormRow>
      <FormGroup>
        <label>Contact Number</label>
        <FormInput
          type="text"
          name="mobile"
          placeholder="+92 322 7901620"
          value={contactForm.mobile}
          onChange={handleContactState}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="inputAddress2">Email</label>
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={contactForm.email}
          onChange={handleContactState}
        />
      </FormGroup>

      <Button success type="submit">
        {contactForm.id ? BTN_ACTIONS.UPDATE : BTN_ACTIONS.ADD}
      </Button>
    </form>
  </StyledContactForm>
);

ContactForm.propTypes = {
  contactForm: object.isRequired,
  handleContactState: func.isRequired,
  handleSubmit: func.isRequired
};

export default ContactForm;
