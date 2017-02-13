import React, { Component } from 'react';

import NavLink from './NavLink';

import './Layout.css';

class Layout extends Component {
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

        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
