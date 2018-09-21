import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';

export default () => (
  <Switch>
    <Route key='0' exact path='/' component={Main} />
  </Switch>
);
