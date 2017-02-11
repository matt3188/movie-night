import React, { Component } from 'react';

import {discoverMovies} from '../utils/api';
class Home extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      results: []
    }
  }

  componentDidMount() {
    discoverMovies('2017').then( ( res ) => {
      this.setState({
        results: res.results
      });
    });
  }

  render() {
    return (
      <div className="app-home">
        <div className="home-bg" />
      </div>
    )
  }
}

export default Home;