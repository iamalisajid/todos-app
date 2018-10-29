import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import login from './login';
import todos from './todos';
import contacts from './contacts';

const loginPersistConfig = {
  key: 'login',
  storage: storage,
  blacklist: ['loading', 'error', 'loginForm']
};

const appReducer = combineReducers({
  login: persistReducer(loginPersistConfig, login),
  todos,
  contacts
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
