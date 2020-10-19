import React from 'react';
import { Route } from 'react-router-dom';

// Screens
import { ErrorScreen, LoadingScreen } from 'components/layouts/screens';

// Layout
import { MainLayout } from 'components/layouts/main-layout';

export const MainRoute = ({ component: Component, ...otherProps }) => (
  <Route
    {...otherProps}
    render={routeProps => {
      return (
        <ErrorScreen>
          <MainLayout {...routeProps}>
            <Component
              {...routeProps}
              {...otherProps}
              fallback={<LoadingScreen {...routeProps} />}
            />
          </MainLayout>
        </ErrorScreen>
      );
    }}
  />
);
