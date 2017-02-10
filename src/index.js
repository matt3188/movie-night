import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';

import Home from './views/Home';
import Movies from './views/Movies';
import Television from './views/Television';

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/movie" component={Movies} />
      <Route path="/television" component={Television} />
    </Route>
  </Router>
),  document.getElementById('root'));
