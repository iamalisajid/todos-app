import apiCaller from '../../utils/apiCaller';
import * as types from './actionTypes';
import {API_ROUTES} from '../../utils/endpoints';
import {REQUEST_TYPE} from '../../utils/constants';

export const updateLoginFields = (user) => ({type: types.LOGIN_INPUT, payload: user});

const loginRequest = () => ({type: types.LOGIN_REQUEST});
const loginSuccess = (user) => ({type: types.LOGIN_SUCCESS, payload: user});
const loginfailed = (msg) => ({type: types.LOGIN_FAILURE, payload: msg});

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch(loginRequest());
    apiCaller(API_ROUTES.LOGIN, REQUEST_TYPE.GET, null, user)
      .then(response => response.data.length ? dispatch(loginSuccess(response.data)) :
        dispatch((loginfailed("Invalid Username Password")))
      )
  }
};
