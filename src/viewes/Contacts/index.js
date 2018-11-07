import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { object, array, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import ContactsList from './ContactList';
import ContactForm from './ContactForm';
import AppLoader from '../../shared/loader';
import * as contactSelectors from '../../selectors';
import * as contactActions from './actions';
import { ContactLayout } from './styles';
import { AVATAR } from '../../utils/copies';

class Contacts extends Component {
  componentDidMount() {
    this.props.actions.fetchContacts();
  }

  handleDelete = (id) => this.props.actions.deleteContact(id);

  handleUpdate = (contact) => this.props.actions.updateContactField(contact);

  handleContactState = (event) => {
    const { contactForm, actions } = this.props;
    const field = event.target.name;
    contactForm[field] = event.target.value;
    actions.updateContactField(contactForm);
  };

  handleSubmit = (contact) => {
    const newContact = contact;
    newContact.avatar = AVATAR;
    this.props.actions.createContact(newContact);
    // contactForm.id ? actions.updateContact(contactForm) : actions.createContact(contactForm);
  };

  render() {
    const { contactForm, contacts, loading } = this.props;
    if (loading) return <AppLoader />;

    return (
      <ContactLayout>
        <ContactForm contactForm={contactForm} onSubmit={this.handleSubmit} />
        <ContactsList contacts={contacts} onDeletion={this.handleDelete} handleUpdate={this.handleUpdate} />
      </ContactLayout>
    );
  }
}

Contacts.propTypes = {
  actions: object.isRequired,
  contactForm: object.isRequired,
  contacts: array.isRequired,
  loading: bool.isRequired,
  error: string,
};

const mapStateToProps = ({ contacts }) => ({
  contactForm: contactSelectors.selectContactForm(contacts),
  contacts: contactSelectors.selectContacts(contacts),
  loading: contactSelectors.selectContactLoadingState(contacts),
  error: contactSelectors.selectContactErrors(contacts),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(contactActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
