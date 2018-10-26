import {combineReducers} from 'redux';
import login from './login';
import todo from './todo';

const rootReducer = combineReducers({
  login,
  todo
});

export default rootReducer;
