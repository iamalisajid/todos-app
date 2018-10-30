import {combineReducers} from 'redux';
import login from './login';
import todos from './todos';
import contacts from './contacts';

const appReducer = combineReducers({
  login,
  todos,
  contacts
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
  }
  return appReducer(state, action)
};

export default rootReducer;
