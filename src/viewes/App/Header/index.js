import React from 'react';
import { object, func, bool } from 'prop-types';
import { withRouter } from 'react-router';
import { HEADER_TITILE } from '../../../utils/copies';
import { APP_ROUTES, BTN_ACTIONS } from '../../../utils/constants';
import { AppHeader, AppTitle, LogoutButton } from './styles';

const Header = ({ location, themeValue, toggleTheme }) => (
  <AppHeader>
    <AppTitle>{HEADER_TITILE}</AppTitle>
    <div className="lightbulb-container">
      <input type="checkbox" id="lightswitch" onChange={toggleTheme} value={themeValue} checked={themeValue} />
      <div id="lightbulb" />
    </div>
    {location.pathname !== APP_ROUTES.BASE &&
      location.pathname !== APP_ROUTES.LOGIN && (
        <div>
          <LogoutButton danger as="a" href={APP_ROUTES.LOGIN}>
            <span className="fa fa-sign-out" />
            {BTN_ACTIONS.LOGOUT}
          </LogoutButton>
        </div>
      )}
  </AppHeader>
);

Header.propTypes = {
  location: object.isRequired,
  toggleTheme: func.isRequired,
  themeValue: bool.isRequired,
};

export default withRouter(Header);
