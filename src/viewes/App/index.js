import React from 'react'
import Header from './Header/index'
import Todos from '../Todos'
import routes from '../../routes';
import {Link} from 'react-router-dom'

const App = () => (
  <div>
    <Header/>
    <div className="btn-toolbar mx-auto" role="group">
      <Link className="btn btn-success" to="/todos">Todos</Link>

      <Link className="btn btn-primary " to="/contacts">Contacts</Link>
    </div>
    {routes}
  </div>
);

export default App;
