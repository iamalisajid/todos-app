import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactsList from './ContactList';
import ContactForm from './ContactForm';
import AppLoader from '../../shared/loader';
import * as contactSelectors from '../../selectors';
import * as contactActions from './actions';
import { ContactLayout } from './stlyes';

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

  handleSubmit = (event) => {
    event.preventDefault();
    const { contactForm, actions } = this.props;
    contactForm.id
      ? actions.updateContact(contactForm)
      : actions.createContact(contactForm);
  };

  render() {
    const { contactForm, contacts, loading } = this.props;
    if (loading) return <AppLoader/>;

    return (
      <ContactLayout>
        <ContactForm
          contactForm={contactForm}
          handleContactState={this.handleContactState}
          handleSubmit={this.handleSubmit}
        />
        <ContactsList
          contacts={contacts}
          onDeletion={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </ContactLayout>
    )
      ;
  }
}

const mapStateToProps = ({ contacts }) => ({
  contactForm: contactSelectors.selectContactForm(contacts),
  contacts: contactSelectors.selectContacts(contacts),
  loading: contactSelectors.selectLoading(contacts),
  error: contactSelectors.selectError(contacts)
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(contactActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
