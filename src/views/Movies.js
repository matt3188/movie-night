import React, { Component } from 'react';

import {getMovies} from '../utils/api';

import SearchBar from '../components/SearchBar';
class Movie extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      movieSearched: '',
      movies: []
    }
  }

  movieLookUp( term ) {
    getMovies( term ).then( ( res ) => {
      this.setState({
        movies: res.Search
      });
    });
  }

  handleTermChange = ( movieSearched ) => {
    this.movieLookUp( movieSearched );
    this.setState({ movieSearched })
  }

  render() {
    return (
      <div className="container">
        <SearchBar onTermChange={ this.handleTermChange } />
      </div>
    )
  }
}

export default Movie;