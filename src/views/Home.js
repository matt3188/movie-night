import React, { Component } from 'react';

import {discoverMovies} from '../utils/api';
import Discover from '../components/Discover'

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
        <Discover {...this.state} />
      </div>
    )
  }
}

export default Home;