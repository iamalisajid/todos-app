import React from 'react';
import { object, func } from 'prop-types';
import { ListGroupItem, Row, RoundedImage, FontAws } from '../../../globalStyles';
import { GridCloumn, ContactFields } from '../styles';

const ContactItem = ({ contact, onDeletion, handleUpdate }) => (
  <ListGroupItem>
    <Row>
      <GridCloumn span={4}>
        <RoundedImage
          className="rounded-circle mx-auto d-block img-fluid"
          src={contact.avatar}
          alt={contact.firstName}
        />
      </GridCloumn>
      <GridCloumn span={8}>
        <FontAws right className="fa fa-pencil" onClick={handleUpdate.bind(this, contact)} />
        <label className="name lead">
          {contact.firstName} {contact.lastName}
        </label>
        <br />
        <FontAws danger right className="fa fa-trash" onClick={onDeletion.bind(this, contact.id)} />
        <FontAws className="fa fa-phone fa-fw" />
        <ContactFields>{contact.mobile}</ContactFields>
        <br />
        <FontAws className="fa fa-envelope fa-fw text-muted" />
        <ContactFields>{contact.email}</ContactFields>
      </GridCloumn>
    </Row>
  </ListGroupItem>
);

ContactItem.propTypes = {
  contact: object.isRequired,
  onDeletion: func.isRequired,
  handleUpdate: func.isRequired,
};

export default ContactItem;
