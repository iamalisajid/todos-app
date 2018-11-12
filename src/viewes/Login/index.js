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
  handleSubmit = (user) => {
    const { actions } = this.props;
    actions.loginUser(user);
  };

  render() {
    const { loading, error, user } = this.props;
    if (loading) return <AppLoader />;
    if (user != null) return <Redirect to={APP_ROUTES.DASHBOARD} />;

    return (
      <Row>
        <LoginFormLayout>
          <LoginForm error={error} onSubmit={this.handleSubmit} />
        </LoginFormLayout>
      </Row>
    );
  }
}

Login.propTypes = {
  actions: object.isRequired,
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
