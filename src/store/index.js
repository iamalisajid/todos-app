import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';

const middlewares = [thunk];

const getStore = initialState => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

export default getStore;
