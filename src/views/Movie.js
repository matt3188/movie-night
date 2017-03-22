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
    const movieTitle = this.state.movie.title,
          release = this.state.movie.release_date,
          movieReleaseDate = release,
          image_url = tmdb.image_url + '/w500',
          averageRating = this.state.movie.vote_average + ' ⭑',
          runTime = 'Runtime: ' + this.state.movie.runtime + 'mins',
          overview = this.state.movie.overview;

    return (
      <div className="container">
        {this.state.movie.title ? (
          <h1>{movieTitle} - {movieReleaseDate}</h1>
        ) : <h1>TBC</h1> }
        <div className="movie-info">
          { this.state.movie.vote_average ? (
            <p>{averageRating}</p>
          ) : null }
          { this.state.movie.runtime ? (
            <p>{runTime}</p>
          ) : null }
        </div>
        { this.state.movie.overview ? (
          <p>{overview}</p>
        ) : null}
        <img src={image_url + this.state.movie.poster_path} alt={this.state.movie.title} />
      </div>
    )
  }
}

export default Movie;
