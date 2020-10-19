import React from 'react';

// Styles
import 'lib/styles/index.scss';

// Routes
import { Routes } from 'pages/root.routes';

// Helpers
import { history } from 'lib/helpers';

function App() {
  return <Routes history={history} />;
}

export { App };
