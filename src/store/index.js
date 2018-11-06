import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'theme'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

export const getStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(getStore);
