import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

// Styles
import 'lib/styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';

// Routes
import { Routes } from 'pages/root.routes';

// Helpers
import { history } from 'lib/helpers';

toast.configure();

function App() {
  return (
    <React.Fragment>
      <Routes history={history} />
      <ToastContainer />
    </React.Fragment>
  );
}

export { App };
