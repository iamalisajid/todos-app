import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Todos from "./viewes/Todos";
import Contacts from "./viewes/Contacts";
import Dashboard from "./viewes/Dashboard";

export default (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/todos" component={Todos} />
    <Route path="/contacts" component={Contacts} />
  </Switch>
);