import React from 'react';
import {Link} from 'react-router-dom';
import {HEADER_TITILE} from '../../../utils/copies';
import {BTN_ACTIONS} from '../../../utils/constants';

const Header = () => (
  <header className="App-header">
    <div className="row">
      <div className="col-lg-6">
        <h2 className="App-title">{HEADER_TITILE}</h2>
      </div>
      <div className="col-lg-6">
        <Link className="btn btn-danger float-right" to="/">
          <span className="fa fa-sign-out"/>{BTN_ACTIONS.LOGOUT}
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
