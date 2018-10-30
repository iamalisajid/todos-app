import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactsList from './ContactList';
import ContactForm from './ContactForm';
import AppLoader from '../../shared/loader';
import * as contactActions from './actions';

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
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ContactForm
                contactForm={contactForm}
                handleContactState={this.handleContactState}
                handleSubmit={this.handleSubmit}
              />
            </div>
            <div className="col-md-6">
              <ContactsList
                contacts={contacts}
                onDeletion={this.handleDelete}
                handleUpdate={this.handleUpdate}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ contacts }) => ({
  contactForm: contacts.contactForm,
  contacts: contacts.contacts,
  loading: contacts.loading,
  error: contacts.error
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(contactActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
