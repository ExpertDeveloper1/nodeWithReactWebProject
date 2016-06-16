import React from 'react';
import { Route, IndexRoute} from 'react-router';
// app core
import App from '../app/index.js';

// import all components
import Welcome from '../pages/welcome.js';
import Account from '../pages/account';
import System from '../pages/system';

// create route array
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="account" component={Account} />
    <Route path="system" component={System} />
  </Route>
);
export default routes;
