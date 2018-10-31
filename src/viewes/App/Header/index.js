import React from 'react';
import { object } from 'prop-types';
import { withRouter } from 'react-router';
import { HEADER_TITILE } from '../../../utils/copies';
import { APP_ROUTES, BTN_ACTIONS } from '../../../utils/constants';
import { AppHeader, AppTitle, LogoutButton } from './styles';


const Header = ({ location }) => (
  <AppHeader>
    <AppTitle>{HEADER_TITILE}</AppTitle>
    {(location.pathname !== APP_ROUTES.BASE && location.pathname !== APP_ROUTES.LOGIN) &&
    <div>
      <LogoutButton danger as="a" href={APP_ROUTES.LOGIN}>
        <span className="fa fa-sign-out"/>{BTN_ACTIONS.LOGOUT}
      </LogoutButton>
    </div>
    }
  </AppHeader>
);

Header.propTypes = {
  location: object.isRequired
};

export default withRouter(Header);
