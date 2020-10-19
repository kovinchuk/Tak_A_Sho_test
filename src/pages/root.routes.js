import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

// Layout
import { MainRoute } from 'components/layouts/route-templates';

// Pages Components
import { Home, NotFound } from 'pages/routes';

// Routes
export const Routes = ({ history }) => (
  <Router history={history}>
    <Switch>
      <MainRoute exact path="/" component={Home} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
