import React, { Component } from 'react';

import {tmdb} from '../utils/api';

import '../components/movie.css';

class Movie extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      movie: {}
    }
  }

  lookupMovie( id ) {
    tmdb.lookupMovie( id ).then( ( res ) => {
      this.setState({
        movie: res
      })
      console.log(res)
    });
  }

  componentDidMount() {
    this.lookupMovie( this.props.params.id );
  }

  render() {
    const image_url = tmdb.image_url + '/w500'

    return (
      <div className="container">
        <h1>{this.state.movie.title} - {this.state.movie.release_date}</h1>
        <div className="movie-info">
          <p>{this.state.movie.vote_average} ⭑</p>
          <p>Runtime: {this.state.movie.runtime}mins</p>
        </div>
        <p>{this.state.movie.overview}</p>
        <img src={image_url + this.state.movie.poster_path} alt={this.state.movie.title} />
      </div>
    )
  }
}

export default Movie;
