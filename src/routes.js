import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './components/Layout';
import Home from './views/Home';
import Movies from './views/Movies';
import Television from './views/Television';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/movie" component={Movies} />
    <Route path="/television" component={Television} />
  </Route>
);

export default routes;