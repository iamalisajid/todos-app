import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bool, string, object } from 'prop-types';
import LoginForm from './LoginForm';
import AppLoader from '../../shared/loader';
import { APP_ROUTES } from '../../utils/constants';
import * as loginActions from './actions';
import { Row } from '../../globalStyles';
import { LoginFormLayout } from './styles';

class Login extends React.Component {
  componentDidMount() {
    this.props.actions.logoutUser();
  }

  updateLoginFields = (event) => {
    const field = event.target.name;
    const { loginForm, actions } = this.props;
    loginForm[field] = event.target.value;
    actions.updateLoginFields(loginForm);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { loginForm, actions } = this.props;
    actions.loginUser(loginForm);
  };

  render() {
    const { loginForm, loading, error, user } = this.props;
    if (loading) return <AppLoader />;
    if (user != null) return <Redirect to={APP_ROUTES.DASHBOARD} />;

    return (
      <Row>
        <LoginFormLayout>
          <LoginForm
            loginForm={loginForm}
            error={error}
            handleInput={this.updateLoginFields}
            handleSubmit={this.handleSubmit}
          />
        </LoginFormLayout>
      </Row>
    );
  }
}

Login.propTypes = {
  actions: object.isRequired,
  loginForm: object,
  user: object,
  loading: bool.isRequired,
  error: string,
};
const mapStateToProps = ({ login }) => ({
  loginForm: login.loginForm,
  user: login.user,
  loading: login.loading,
  error: login.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(loginActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
