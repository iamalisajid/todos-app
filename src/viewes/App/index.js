import React, { Component, Fragment } from 'react';
import { object, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import Header from './Header/index';
import routes from '../../config/routes';
import { GlobalStyle } from '../../globalStyles';
import * as themeSelectors from '../../selectors/themeSelector';
import * as appActions from './actions';
import { APP_ROUTES } from '../../utils/constants';
import messages from '../../utils/messages';

class App extends Component {
  toggleUserTheme = (event) => {
    this.props.actions.toggleTheme(event.target.checked);
  };

  handleLogout = () => {
    const { actions, history } = this.props;
    actions.logoutUser();
    history.push(APP_ROUTES.BASE);
  };

  handleLocale = (lang) => {
    this.props.actions.setLocale(lang);
  };

  render() {
    const { mode, lightMode, location, lang } = this.props;
    return (
      <ThemeProvider theme={mode}>
        <IntlProvider key={lang} locale={lang} messages={messages[lang]}>
          <Fragment>
            <GlobalStyle />
            <Header
              themeValue={lightMode}
              location={location}
              locale={lang}
              toggleTheme={this.toggleUserTheme}
              handleLocale={this.handleLocale}
              handleDelete={this.handleLogout}
            />
            {routes}
          </Fragment>
        </IntlProvider>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  actions: object.isRequired,
  mode: object.isRequired,
  lightMode: bool.isRequired,
  history: object.isRequired,
  location: object.isRequired,
  lang: string.isRequired,
};

const mapStateToProps = ({ theme, locale }) => ({
  lightMode: themeSelectors.selectMode(theme),
  mode: themeSelectors.selectTheme(theme),
  lang: locale.lang,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(appActions, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
