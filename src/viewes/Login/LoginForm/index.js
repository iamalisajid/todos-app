import React from 'react';
import {object, string, func} from 'prop-types';
import {BTN_ACTIONS} from '../../../utils/constants';
import './index.css';

const LoginForm = ({currentUser, error, handleInput, handleSubmit}) => {
  return (
    <div className="card card-signin my-5">
      <div className="card-body">
        <h5 className="card-title text-center">{BTN_ACTIONS.LOGIN}</h5>
        <form className="form-signin" onSubmit={handleSubmit}>
          <div className="form-label-group">
            <input
              type="email"
              name="email"
              value={currentUser.email}
              onChange={handleInput}
              className="form-control"/>
            <label htmlFor="inputEmail">Email address</label>
          </div>
          <div className="form-label-group">
            <input
              type="password"
              name="password"
              value={currentUser.password}
              onChange={handleInput}
              className="form-control"/>
            <label htmlFor="inputEmail">Password</label>
          </div>
          <p className="error"> {error} </p>
          <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
            <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
          </div>
          <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  currentUser: object.isRequired,
  error: string.isRequired,
  handleSubmit: func.isRequired,
  handleInput: func.isRequired
};

export default LoginForm;
