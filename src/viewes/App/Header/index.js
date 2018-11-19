import React from 'react';
import { object, func, bool, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { HEADER_TITILE } from '../../../utils/copies';
import { APP_ROUTES, BTN_ACTIONS } from '../../../utils/constants';
import { LightBulb, Hidden, LanguagePicker } from '../../../globalStyles';
import { AppHeader, AppTitle, LogoutButton } from './styles';

const Header = ({ location, themeValue, locale, toggleTheme, handleDelete, handleLocale }) => (
  <AppHeader>
    <AppTitle>
      <FormattedMessage id="app.header" defaultMessage={HEADER_TITILE} />
    </AppTitle>
    <LanguagePicker>
      <a onClick={() => handleLocale('en')}>
        <li className={locale === 'en' ? '' : 'hide'}>
          <img src="/eng.png" alt="USA Flag" />
          English
        </li>
      </a>
      <a onClick={() => handleLocale('ru')}>
        <li className={locale === 'ru' ? '' : 'hide'}>
          <img src="/russia.png" alt="Russian Flag" />
          Russia
        </li>
      </a>
    </LanguagePicker>
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
  locale: string.isRequired,
  themeValue: bool.isRequired,
  handleDelete: func.isRequired,
  handleLocale: func.isRequired,
};

export default Header;
