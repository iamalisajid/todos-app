import React from 'react';
import { object, func } from 'prop-types';
import { ListGroupItem, Row, RoundedImage } from '../../../styles';
import { ContactImage, ContactDetails, ContactFields, ContactFonts } from '../stlyes';


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
          <span
            className="fa fa-pencil text-default float-right"
            onClick={handleUpdate.bind(this, contact)}
          />
          <label className="name lead">
            {contact.firstName} {contact.lastName}
          </label>
          <br/>
          <span
            className="fa fa-trash text-danger float-right"
            onClick={onDeletion.bind(this, contact.id)}
          />
          <ContactFonts className="fa fa-phone fa-fw"/>
          <ContactFields>
            {contact.mobile}
          </ContactFields>
          <br/>
          <span className="fa fa-envelope fa-fw text-muted"/>
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
