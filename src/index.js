import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Routes from './routes';

ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoutes = require('./routes').default;

    ReactDOM.render(
      <AppContainer>
        <NextRoutes />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
