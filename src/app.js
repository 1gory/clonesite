import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import Link from './Link';
import NotFound from './NotFound';

export default () => (
  <Switch>
    <Route key='0' exact path='/' component={Main} />
    <Route key='0' exact path='/other' component={Link} />
    <Route key='1' exact path='*' status={404} component={NotFound} />
  </Switch>
);
