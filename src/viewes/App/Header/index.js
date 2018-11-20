import React from 'react';
import { object, func, bool } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ReactFlagsSelect from 'react-flags-select';
import { HEADER_TITILE } from '../../../utils/copies';
import { APP_ROUTES, BTN_ACTIONS } from '../../../utils/constants';
import { LightBulb, Hidden } from '../../../globalStyles';
import { AppHeader, AppTitle, LogoutButton } from './styles';
import 'react-flags-select/css/react-flags-select.css';

const Header = ({ location, themeValue, toggleTheme, handleDelete, handleLocale }) => (
  <AppHeader>
    <AppTitle>
      <FormattedMessage id="app.header" defaultMessage={HEADER_TITILE} />
    </AppTitle>
    <ReactFlagsSelect
      countries={['US', 'RU']}
      defaultCountry="US"
      onSelect={handleLocale}
      showSelectedLabel={true}
    />
    <LightBulb lightOn={themeValue}>
      <Hidden type="checkbox" onChange={toggleTheme} value={themeValue} checked={themeValue} />
    </LightBulb>
    {location.pathname !== APP_ROUTES.BASE && location.pathname !== APP_ROUTES.LOGIN && (
      <div>
        <LogoutButton variant="danger" onClick={handleDelete}>
          <span className="fa fa-sign-out" />
          <FormattedMessage id="logout" defaultMessage={BTN_ACTIONS.LOGOUT} />
        </LogoutButton>
      </div>
    )}
  </AppHeader>
);

Header.propTypes = {
  location: object.isRequired,
  toggleTheme: func.isRequired,
  themeValue: bool.isRequired,
  handleDelete: func.isRequired,
  handleLocale: func.isRequired,
};

export default Header;
