import * as types from '../viewes/Login/actionTypes';
import initialState from './initialState';

const login = (state = initialState.login, action) => {
  switch (action.type) {
    case types.LOGIN_INPUT_UPDATE:
      return {
        ...state,
        loginForm: Object.assign({}, action.payload)
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case  types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        loginForm: initialState.loginForm
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default login;
