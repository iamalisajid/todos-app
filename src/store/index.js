import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [thunk];
const getStore = initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default getStore;
