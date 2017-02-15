import React, { Component } from 'react';
import {tmdb} from '../utils/api';
import { Link } from 'react-router'

import './discoverThumb.css'

class DiscoverThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const image_url = tmdb.image_url + '/w500'
    return (
      <li className="discover-thumb">
        <div className="discover-image">
          <img alt="" src={image_url + this.props.movie.backdrop_path} />
        </div>
        <div className="discover-overview">
          {!!this.props.movie.vote_average && <div className="average-rating">{this.props.movie.vote_average} ⭑</div>}
          <h2 className="movie-title">{this.props.movie.title}</h2>
          <Link to={{pathname: '/movie/' + this.props.movie.id, state:this.props.movie}}>Find out more</Link>
        </div>
      </li>
    )
  }
}

export default DiscoverThumb;