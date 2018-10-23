import React, {Component} from 'react';
import ContactsList from './ContactList';
import {fetchContacts} from "../../utils/apiCaller";
import changeCaseObject from "change-case-object";
import AppLoader from '../../shared/loader';
import AddContacts from "./AddContact";

class Contacts extends Component {
  state = {
    contacts: [],
    loading: true
  };

  componentDidMount() {
    fetchContacts().then(json =>
      this.setState({
        contacts: changeCaseObject.camelCase(json),
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
      <div>
        <AddContacts/>
        <ContactsList
          contacts={contacts}
          onDeletion={this.onDeletion}
        />
      </div>
    );
  }
}

export default Contacts;
