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
    const image_url = tmdb.image_url + '/w500';

    return (
      <div className="container">

        { this.state.movie.title ? <h1>{this.state.movie.title} - {this.state.movie.release_date}</h1> : null }

        <div className="movie-info">
          { this.state.movie.vote_average ? <p>{this.state.movie.vote_average} ⭑</p> : null }

          { this.state.movie.runtime ? <p>{this.state.movie.runtime}mins</p> : null }
        </div>

        { this.state.movie.overview ? <p>{ this.state.movie.overview }</p> : null }

        { this.state.movie.poster_path ? <img src={image_url + this.state.movie.poster_path} alt={this.state.movie.title} /> : null }
      </div>
    )
  }
}

export default Movie;
