import React, { Component } from 'react';
import {tmdb} from '../utils/api';

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
    });
  }

  componentDidMount() {
    this.lookupMovie( this.props.params.id );
  }

  render() {
    const image_url = tmdb.image_url + '/w500'

    return (
      <div className="container">
        <h1>{this.state.movie.title}</h1>
        <p>{this.state.movie.overview}</p>
        <img src={image_url + this.state.movie.backdrop_path} alt={this.state.movie.title} />
      </div>
    )
  }
}

export default Movie;
