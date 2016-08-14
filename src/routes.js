import React from 'react';
import { Route, IndexRoute } from 'react-router';
import RequireAuth from './containers/require-auth';

import Home from './containers/home';
import Show from './containers/show';
import New from './containers/new';
import App from './components/app';
import SignIn from './containers/signin';
import SignUp from './containers/signup';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/new" component={RequireAuth(New)} />
    <Route path="posts/:id" component={Show} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
  </Route>
);
