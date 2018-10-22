import React from 'react'
import Header from './Header/index'
import routes from '../../config/routes';

const App = () => (
  <div>
    <Header/>
    {routes}
  </div>
);

export default App;
