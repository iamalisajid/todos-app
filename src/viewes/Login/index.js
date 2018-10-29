import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import LoginForm from './LoginForm';
import AppLoader from '../../shared/loader';
import {APP_ROUTES} from '../../utils/constants';
import * as loginActions from './actions';

class Login extends React.Component {

  updateLoginFields = event => {
    const field = event.target.name;
    let {loginForm, actions} = this.props;
    loginForm[field] = event.target.value;
    actions.updateLoginFields(loginForm)
  };

  handleSubmit = event => {
    event.preventDefault();
    const {loginForm, actions} = this.props;
    actions.loginUser(loginForm);
  };

  render() {
    const {loginForm, loading, error, user} = this.props;
    if (loading)
      return <AppLoader/>;
    else if (user != null)
      return <Redirect to={APP_ROUTES.DASHBOARD}/>;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <LoginForm
              loginForm={loginForm}
              error={error}
              handleInput={this.updateLoginFields}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({login}) => ({
    loginForm: login.loginForm,
    user: login.user,
    loading: login.loading,
    error: login.error
  }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(loginActions, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
