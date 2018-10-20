import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from "./viewes/App";
import Todos from "./viewes/Todos";
import Contacts from "./viewes/Contacts";

export default (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/todos" component={Todos} />
    <Route path="/contacts" component={Contacts} />
  </Switch>
);