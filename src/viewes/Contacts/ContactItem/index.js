import React from 'react';
import { object, func } from 'prop-types';
import { ListGroupItem, Row, RoundedImage, FontAws } from '../../../globalStyles';
import { ContactImage, ContactDetails, ContactFields } from '../styles';


const ContactItem = ({ contact, onDeletion, handleUpdate }) => {
  return (
    <ListGroupItem>
      <Row>
        <ContactImage>
          <RoundedImage
            className="rounded-circle mx-auto d-block img-fluid"
            src={contact.avatar}
            alt={contact.firstName}/>
        </ContactImage>
        <ContactDetails>
          <FontAws right className="fa fa-pencil" onClick={handleUpdate.bind(this, contact)}/>
          <label className="name lead">
            {contact.firstName} {contact.lastName}
          </label>
          <br/>
          <FontAws danger right className="fa fa-trash" onClick={onDeletion.bind(this, contact.id)}/>
          <FontAws className="fa fa-phone fa-fw"/>
          <ContactFields>
            {contact.mobile}
          </ContactFields>
          <br/>
          <FontAws className="fa fa-envelope fa-fw text-muted"/>
          <ContactFields>
            {contact.email}
          </ContactFields>
        </ContactDetails>
      </Row>
    </ListGroupItem>
  );
};


ContactItem.propTypes = {
  contact: object.isRequired,
  onDeletion: func.isRequired,
  handleUpdate: func.isRequired
};

export default ContactItem;
