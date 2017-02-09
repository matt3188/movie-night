import React, { Component } from 'react';

import NavLink from './NavLink';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul role="navigation">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/movie">Movie</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
