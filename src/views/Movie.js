import React, { Component } from 'react';
import {tmdb} from '../utils/api';

class Movie extends Component {
  render() {
    const image_url = tmdb.image_url + '/w500'

    return (
      <div className="container">
      <h1>{this.props.location.state.title}</h1>
      <p>{this.props.location.state.overview}</p>
      <img src={image_url + this.props.location.state.backdrop_path} alt={this.props.location.state.title} />
      </div>
    )
  }
}

export default Movie;
