import React, { Component } from 'react';

import NavLink from './NavLink';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <div className="container">
            <h1 className="heading">Movie Night</h1>
            <ul role="navigation" className="list nav-list">
              <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
              <li><NavLink to="/movie">Movie</NavLink></li>
              <li><NavLink to="/Television">TV</NavLink></li>
            </ul>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
