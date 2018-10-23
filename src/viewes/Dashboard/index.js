import React from 'react';
import {Link} from 'react-router-dom';
import {WELCOME} from '../../utils/copies';
import './style.scss';

const Dashboard = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="welcome-template">
          <h1>
            {WELCOME.TITLE}
          </h1>
          <div className="error-details">
            {WELCOME.MESSAGE}
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
