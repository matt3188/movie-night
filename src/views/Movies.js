import React, { Component } from 'react';

import {tmdb} from '../utils/api';

import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList'

class Movie extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      movieSearched: '',
      movies: []
    }
  }

  movieLookUp( term ) {
    tmdb.getMovies( term ).then( ( res ) => {
      this.setState({
        movies: res.results
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
        <MovieList {...this.state} />
      </div>
    )
  }
}

export default Movie;