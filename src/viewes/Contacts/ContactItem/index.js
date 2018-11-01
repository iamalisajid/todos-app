import React from 'react';
import { object, func } from 'prop-types';


const ContactItem = ({ contact, onDeletion, handleUpdate }) => {

  return (
    <li className="list-group-item">
      <div className="row w-100">
        <div className="col-12 col-sm-6 col-md-3 px-0">
          <img
            className="rounded-circle mx-auto d-block img-fluid"
            src={contact.avatar}
            alt={contact.firstName}/>
        </div>

        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">

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
          <span className="fa fa-phone fa-fw text-muted"/>
          <span className="text-muted small">{contact.mobile}</span>
          <br/>

          <span className="fa fa-envelope fa-fw text-muted"/>
          <span className="text-muted small text-truncate">{contact.email}</span>
        </div>
      </div>
    </li>
  );
};


ContactItem.propTypes = {
  contact: object.isRequired,
  onDeletion: func.isRequired,
  handleUpdate: func.isRequired
};

export default ContactItem;
