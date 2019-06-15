import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { styled } from 'linaria/react';

import { Todo } from '../containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Todo} />
  </Switch>
);

export default Routes;

const Black = styled.div`
  && {
    background: black;
    color: white;
  }
`;
