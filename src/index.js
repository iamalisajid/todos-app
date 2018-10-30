import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react'
import App from './viewes/App';
import {getStore, persistor} from './store'
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={getStore}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
