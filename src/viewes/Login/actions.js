import apiCaller from '../../utils/apiCaller';
import {API_ROUTES} from '../../utils/endpoints';
import {REQUEST_TYPE} from '../../utils/constants';
import * as types from './actionTypes';

export const updateLoginFields = (user) => ({type: types.LOGIN_INPUT_UPDATE, payload: user});

const loginRequest = () => ({type: types.LOGIN_REQUEST});
const loginSuccess = (user) => ({type: types.LOGIN_SUCCESS, payload: user});
const loginFailed = (msg) => ({type: types.LOGIN_FAILURE, payload: msg});

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch(loginRequest());
    apiCaller(API_ROUTES.LOGIN, REQUEST_TYPE.GET, null, user)
      .then(response => response.data.length ? dispatch(loginSuccess(response.data)) :
        dispatch((loginFailed("Invalid Username Password")))
      )
  }
};
