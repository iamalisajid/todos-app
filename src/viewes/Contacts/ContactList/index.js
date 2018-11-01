import React from 'react';
import { object, func } from 'prop-types';
import ContactItem from '../ContactItem';
import { ListGroup } from '../../../styles';
import { StyledContactList } from '../stlyes';

const ContactList = ({ contacts, onDeletion, handleUpdate }) => (
  <StyledContactList>
    <h2>Contacts</h2>
    <ListGroup>
      {contacts.map(contact =>
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeletion={onDeletion}
          handleUpdate={handleUpdate}
        />)
      }
    </ListGroup>
  </StyledContactList>
);

ContactList.propType = {
  contacts: object.isRequired,
  onDeletion: func.isRequired,
  handleUpdate: func.isRequired
};
export default ContactList;
