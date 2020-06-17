import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Notification from './shared/modules/notification';
import ErrorBoundary from './shared/modules/error/ErrorBoundary';
import Routes from './routes';

function App() {
  return (
    <Notification>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ErrorBoundary>
    </Notification>
  );
}

export default App;
