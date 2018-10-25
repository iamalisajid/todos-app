import React, {Component, Fragment} from 'react';
import ContactsList from './ContactList';
import ContactForm from './ContactForm';
import AppLoader from '../../shared/loader';
import ApiCaller from '../../utils/apiCaller';
import {API_ROUTES} from '../../utils/endpoints';
import {REQUEST_TYPE} from '../../utils/constants';

class Contacts extends Component {
  state = {
    contacts: [],
    currentContact: {
      id: '',
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      avatar: './avatars/avatar-image.png'
    },
    loading: true
  };

  componentDidMount() {
    ApiCaller(API_ROUTES.CONTACTS, REQUEST_TYPE.GET)
      .then(response =>
        this.setState({
          contacts: response.data,
          loading: false
        }));
  }

  onDeletion = id => {
    this.setState({loading: true});
    const {contacts} = this.state;

    ApiCaller(`${API_ROUTES.CONTACTS}/${id}`, REQUEST_TYPE.DELETE)
      .then(response => this.setState({
        contacts: contacts.filter(contact => contact.id !== id),
        loading: false,
        currentContact: {
          id: '',
          firstName: '',
          lastName: '',
          mobile: '',
          email: '',
          avatar: './avatars/avatar-image.png'
        }
      }));
  }

  handleContactState = event => {
    const field = event.target.name;
    let currentContact = this.state.currentContact;
    currentContact[field] = event.target.value;

    return this.setState({
      currentContact
    });
  };

  handleUpdate = contact => {
    const {currentContact} = this.state;
    this.setState({
      currentContact: Object.assign(currentContact, contact)
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    const {currentContact, contacts} = this.state;
    if (!currentContact.id)
      ApiCaller(API_ROUTES.CONTACTS, REQUEST_TYPE.POST, currentContact)
        .then(response => this.setState({
          contacts: contacts.concat(response.data),
          currentContact: {
            id: '',
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            avatar: './avatars/avatar-image.png'
          }
        }));
    else
      ApiCaller(`${API_ROUTES.CONTACTS}/${currentContact.id}`, REQUEST_TYPE.PUT, currentContact)
        .then(response => this.setState({
          contacts: contacts.map(contact => contact.id === response.data.id ? response.data : contact),
          currentContact: {
            id: '',
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            avatar: './avatars/avatar-image.png'
          }
        }));

  };

  render() {
    const {loading, contacts} = this.state;

    if (loading)
      return <AppLoader/>;

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ContactForm
                currentContact={this.state.currentContact}
                handleContactState={this.handleContactState}
                handleSubmit={this.handleSubmit}
              />
            </div>
            <div className="col-md-6">
              <ContactsList
                contacts={contacts}
                onDeletion={this.onDeletion}
                handleUpdate={this.handleUpdate}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contacts;
