import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ContactsList from './ContactList';
import ContactForm from './ContactForm';
import AppLoader from '../../shared/loader';
import * as contactActions from './actions';

class Contacts extends Component {

  componentDidMount() {
    this.props.actions.fetchContacts();
  }

  handleDelete = id => this.props.actions.deleteContact(id);
  handleUpdate = contact => this.props.actions.updateContactField(contact);

  handleContactState = event => {
    let {currentContact, actions} = this.props;
    const field = event.target.name;
    currentContact[field] = event.target.value;
    actions.updateContactField(currentContact);
  };

  handleSubmit = event => {
    event.preventDefault();
    const {currentContact, actions} = this.props;
    currentContact.id ? actions.updateContact(currentContact) : actions.createContact(currentContact)
  };

  render() {
    const {currentContact, contacts, loading} = this.props;

    if (loading)
      return <AppLoader/>;

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ContactForm
                currentContact={currentContact}
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


const mapStateToProps = ({contacts}) => ({
    currentContact: contacts.currentContact,
    contacts: contacts.contacts,
    loading: contacts.loading,
    error: contacts.error
  }
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(contactActions, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
