import React, {Component} from 'react';
import ContactsList from './ContactList';
import {CONTACTS_LIST} from "../../utils/constants";

class Contacts extends Component {
  state = {
    contacts: CONTACTS_LIST
  };


  render() {
    return (
      <div>
        <ContactsList
          contacts={this.state.contacts}
          onDeletion={onDeletion}
        />
      </div>
    );
  }
}


const onDeletion = (id) => {
  console.log('Deletion');
  console.info(id);
}
export default Contacts;
