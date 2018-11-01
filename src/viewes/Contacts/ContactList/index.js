import React from 'react';
import { object, func } from 'prop-types';
import ContactItem from '../ContactItem';
import { StyledContactList } from '../stlyes';

const ContactList = ({ contacts, onDeletion, handleUpdate }) => (
  <StyledContactList>
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
  </StyledContactList>
);

ContactList.propType = {
  contacts: object.isRequired,
  onDeletion: func.isRequired,
  handleUpdate: func.isRequired
};
export default ContactList;
