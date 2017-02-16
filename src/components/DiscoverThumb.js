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
        <Link to={{pathname: '/movie/' + this.props.movie.id, state:this.props.movie}}>
          <div className="discover-image">
            {!!this.props.movie.backdrop_path && <img alt="" src={image_url + this.props.movie.backdrop_path} />}
          </div>
          <div className="discover-overview">
            {!!this.props.movie.vote_average && <div className="average-rating">{this.props.movie.vote_average} ⭑</div>}
            <h2 className="movie-title">{this.props.movie.title}</h2>
          </div>
        </Link>
      </li>
    )
  }
}

export default DiscoverThumb;