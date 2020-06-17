import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import HomeContainer from './containers/home';

const Routes = () => (
  <Suspense fallback="loading">
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </Suspense>
);

export default Routes;
