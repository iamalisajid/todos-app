import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";

const Dashboard = ({props}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="wlecome-template">
          <h1>
            Welcome
          </h1>
          <div className="error-details">
           Add Todos & Contacts
          </div>
          <div className="error-actions">
            <Link className="btn btn-success btn-lg" to="/todos">Todos</Link>
            <Link className="btn btn-primary btn-lg" to="/contacts">Contacts</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Dashboard;


