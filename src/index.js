import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';

import Home from './views/Home';
import Movie from './views/Movie';

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/movie" component={Movie} />
    </Route>
  </Router>
),  document.getElementById('root'));
