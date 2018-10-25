import * as types from '../viewes/Login/actionTypes';

const initialState = {
  user: [],
  loading: false,
  error: '',
  currentUser: {
    email: '',
    password: ''
  }
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_INPUT:
      return {
        ...state,
        currentUser: Object.assign({}, action.payload)
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
        currentUser: {
          email: '',
          password: ''
        },
        error: ''
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

export default todos;
