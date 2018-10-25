import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Todos from '../viewes/Todos/index';
import Contacts from '../viewes/Contacts/index';
import Dashboard from '../viewes/Dashboard/index';
import {APP_ROUTES} from '../utils/constants';

export default (
  <Switch>
    <Route path={APP_ROUTES.BASE} exact component={Dashboard}/>
    <Route path={APP_ROUTES.TODOS} component={Todos}/>
    <Route path={APP_ROUTES.CONTACTS} component={Contacts}/>
  </Switch>
);
