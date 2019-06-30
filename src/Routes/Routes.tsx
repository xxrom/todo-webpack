import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Todo } from '../containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Todo} />
  </Switch>
);

export default Routes;
