import React from 'react';
import {object, func} from 'prop-types';
import ContactItem from '../ContactItem';

const ContactList = ({contacts, onDeletion, handleUpdate}) => (
  <div className="container">
    <h2>Contacts</h2>

    <ul className="list-group">
      {contacts.map(contact =>
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeletion={onDeletion}
          handleUpdate={handleUpdate}
        />)
      }
    </ul>
  </div>
);

ContactList.propType = {
  contacts: object.isRequired,
  onDeletion: func.isRequired,
  handleUpdate: func.isRequired
};
export default ContactList;
