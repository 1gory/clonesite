import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
// import Catalog from './Catalog';
// import Basket from './Basket';

export default () => (
  <Switch>
    <Route key='0' exact path='/' component={Main} />
  </Switch>
);
