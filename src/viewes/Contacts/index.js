import React, {Component, Fragment} from 'react';
import ContactsList from './ContactList';
import AddContacts from './AddContact';
import AppLoader from '../../shared/loader';
import {ApiCaller} from '../../utils/apiCaller';
import {API_ROUTES} from '../../utils/endpoints';
import {REQUEST_TYPE} from '../../utils/constants';

class Contacts extends Component {
  state = {
    contacts: [],
    loading: true
  };

  componentDidMount() {
    ApiCaller(API_ROUTES.CONTACTS, REQUEST_TYPE.GET).then(contacts =>
      this.setState({
        contacts,
        loading: false
      }));
  }

  onDeletion = (id) => {
    console.log('Deletion');
    console.info(id);
  };

  render() {
    const {loading, contacts} = this.state;

    if (loading)
      return <AppLoader/>;

    return (
      <Fragment>
        <AddContacts/>
        <ContactsList
          contacts={contacts}
          onDeletion={this.onDeletion}
        />
      </Fragment>
    );
  }
}

export default Contacts;
