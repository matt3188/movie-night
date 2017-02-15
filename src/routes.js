import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './components/Layout';

import Home from './views/Home';
import Movies from './views/Movies';
import Movie from './views/Movie';
import Television from './views/Television';
import Watchlist from './views/Watchlist';
import NotFound from './views/NotFound';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/movie" component={Movies} />
    <Route path="/movie/:id" component={Movie} />
    <Route path="/television" component={Television} />
    <Route path="/watchlist" component={Watchlist} />
    <Route path='*' component={NotFound} />
  </Route>
);

export default routes;
