import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Todos from '../viewes/Todos';
import Contacts from '../viewes/Contacts';
import Dashboard from '../viewes/Dashboard';
import Login from '../viewes/Login'
import {APP_ROUTES} from '../utils/constants';

export default (
  <Switch>
    <Route path={APP_ROUTES.BASE} exact component={Login}/>
    <Route path={APP_ROUTES.LOGIN} exact component={Login}/>
    <Route path={APP_ROUTES.DASHBOARD} exact component={Dashboard}/>
    <Route path={APP_ROUTES.TODOS} component={Todos}/>
    <Route path={APP_ROUTES.CONTACTS} component={Contacts}/>
  </Switch>
);
