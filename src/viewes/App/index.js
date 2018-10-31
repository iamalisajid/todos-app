import React, { Fragment } from 'react';
import Header from './Header/index';
import routes from '../../config/routes';

const App = () => (
  <Fragment>
    <Header/>
    {routes}
  </Fragment>
);

export default App;
