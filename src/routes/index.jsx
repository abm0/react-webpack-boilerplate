import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from 'components/Main';

const Routes = () => (
  <Router>
    <Route exact path="/" component={Main} />
  </Router>
);

export default Routes;
