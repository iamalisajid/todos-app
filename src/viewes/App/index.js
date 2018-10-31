import React, { Fragment } from 'react';
import Header from './Header/index';
import routes from '../../config/routes';
import { GlobalStyle } from '../../styles';

const App = () => (
  <Fragment>
    <GlobalStyle/>
    <Header/>
    {routes}
  </Fragment>
);

export default App;
