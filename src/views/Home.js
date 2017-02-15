import React, { Component } from 'react';

import {tmdb} from '../utils/api';
import Discover from '../components/Discover'
import FilterSelection from '../components/FilterSelection'

class Home extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      year: '2017',
      results: []
    }

    this.handleTermChange = this.handleTermChange.bind( this );
  }

  loadMovies( year ) {
    tmdb.discoverMovies( year ).then( ( res ) => {
      this.setState({
        results: res.results,
        year: year
      });
    });
  }

  handleTermChange = ( year ) => {
    this.loadMovies( year );
    this.setState({ year })
  }

  componentDidMount() {
    this.loadMovies( this.state.year );
  }

  render() {
    return (
      <div className="app-home">
        <FilterSelection onTermChange={ this.handleTermChange } />
        <Discover {...this.state} />
      </div>
    )
  }
}

export default Home;