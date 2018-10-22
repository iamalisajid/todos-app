import React from 'react';
import ContactItem from '../ContactItem';
import {object, func} from 'prop-types';

const ContactList = ({contacts, onDeletion}) => (
  <div className="container">
    <h2>Contacts</h2>

    <ul className="list-group">
      {contacts.map(contact =>
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeletion={onDeletion}
        />)
      }
    </ul>
  </div>
);

ContactList.propType = {
  contacts: object.isRequired,
  onDeletion: func.onDeletion
};
export default ContactList;
