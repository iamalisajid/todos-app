import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import todos from './todos';
import contacts from './contacts';
import theme from './theme';
import locale from './locale';

const appReducer = combineReducers({
  login,
  todos,
  contacts,
  theme,
  locale,
  form: formReducer,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'LOGOUT_USER') {
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default rootReducer;
