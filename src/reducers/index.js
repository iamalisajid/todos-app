import { combineReducers } from 'redux';
import login from './login';
import todos from './todos';
import contacts from './contacts';
import theme from './theme';

const appReducer = combineReducers({
  login,
  todos,
  contacts,
  theme,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'LOGOUT_USER') {
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default rootReducer;
