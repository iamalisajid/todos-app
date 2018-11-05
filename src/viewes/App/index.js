import React, { Component, Fragment } from 'react';
import { func, object, bool } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Header/index';
import routes from '../../config/routes';
import { GlobalStyle } from '../../globalStyles';
import * as themeSelectors from '../../selectors/themeSelector';
import * as appActions from './actions';

class App extends Component {
  toggleUserTheme = (event) => {
    this.props.actions.toggleTheme(event.target.checked);
  };

  render() {
    const { mode, lightMode } = this.props;
    return (
      <ThemeProvider theme={mode}>
        <Fragment>
          <GlobalStyle />
          <Header themeValue={lightMode} toggleTheme={this.toggleUserTheme} />
          {routes}
        </Fragment>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  actions: func.isRequired,
  mode: object.isRequired,
  lightMode: bool.isRequired,
};

const mapStateToProps = ({ theme }) => ({
  lightMode: themeSelectors.selectMode(theme),
  mode: themeSelectors.selectTheme(theme),
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
