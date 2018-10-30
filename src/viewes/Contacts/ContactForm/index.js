import React from 'react';
import {object, func} from 'prop-types'
import {BTN_ACTIONS} from '../../../utils/constants';

const ContactForm = ({contactForm, handleContactState, handleSubmit}) => (
  <div className="container">
    <h2>Add Contact</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First Name"
            value={contactForm.firstName}
            onChange={handleContactState}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
            value={contactForm.lastName}
            onChange={handleContactState}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Contact Number</label>
        <input
          type="text"
          name="mobile"
          className="form-control"
          placeholder="+92 322 7901620"
          value={contactForm.mobile}
          onChange={handleContactState}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress2">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={contactForm.email}
          onChange={handleContactState}
        />
      </div>

      <button type="submit" className="btn btn-success">
        {contactForm.id ? BTN_ACTIONS.UPDATE : BTN_ACTIONS.ADD}
      </button>
    </form>
  </div>
);

ContactForm.propTypes = {
  contactForm: object.isRequired,
  handleContactState: func.isRequired,
  handleSubmit: func.isRequired
};

export default ContactForm;
