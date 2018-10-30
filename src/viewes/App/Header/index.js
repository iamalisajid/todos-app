import React from 'react';
import {Link} from 'react-router-dom';
import {object} from 'prop-types';
import {withRouter} from 'react-router';
import {HEADER_TITILE} from '../../../utils/copies';
import {APP_ROUTES, BTN_ACTIONS} from '../../../utils/constants';

const Header = ({location}) => (
  <header className="App-header">
    <div className="row">
      <div className="col-lg-6">
        <h2 className="App-title">{HEADER_TITILE}
        </h2>
      </div>
      <div className="col-lg-6">
        {(location.pathname !== APP_ROUTES.BASE && location.pathname !== APP_ROUTES.LOGIN) &&
        <Link className="btn btn-danger float-right" to={APP_ROUTES.LOGIN}>
          <span className="fa fa-sign-out"/>{BTN_ACTIONS.LOGOUT}
        </Link>}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  location: object.isRequired
};

export default withRouter(Header);
