import {combineReducers} from 'redux';
import login from './login';
import todos from './todos';
import contacts from './contacts';

const rootReducer = combineReducers({
  login,
  todos,
  contacts
});

export default rootReducer;
