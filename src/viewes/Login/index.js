import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import LoginForm from './LoginForm';
import AppLoader from '../../shared/loader';
import {APP_ROUTES} from '../../utils/constants';
import * as loginActions from "./actions";

class Login extends React.Component {

  updateLoginFields = event => {
    const field = event.target.name;
    let {currentUser, actions} = this.props;
    currentUser[field] = event.target.value;
    actions.updateLoginFields(currentUser)
  };

  handleSubmit = event => {
    event.preventDefault();
    const {currentUser,actions} = this.props;
    actions.loginUser(currentUser);
  };

  render() {
    const {currentUser, loading, error, user} = this.props;
    if (loading)
      return <AppLoader/>;
    else if (user.length > 0)
      return <Redirect to={APP_ROUTES.DASHBOARD}/>;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <LoginForm
              currentUser={currentUser}
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
    currentUser: login.currentUser,
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
