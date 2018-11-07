import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import rootSaga from '../config/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'theme'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [sagaMiddleware];

export const getStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(getStore);
