import React, { Component } from 'react';

import './discoverThumb.css'

class DiscoverThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const image_url = 'https://image.tmdb.org/t/p/w500'
    return (
      <li className="discover-thumb">
        <div className="discover-image">
          <img alt="" src={image_url + this.props.movie.backdrop_path} />
        </div>
        <div className="discover-overview">
          <h2 className="movie-title">{this.props.movie.title}</h2>
        </div>
      </li>
    )
  }
}

export default DiscoverThumb;