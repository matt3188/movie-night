import React, { Component } from 'react';

import './movieThumb.css'
import { Link } from 'react-router'

class MovieThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faved: false,
      faveList: []
    };
    this.menuToggle = this.menuToggle.bind(this)
  }

  menuToggle = () => {
    this.setState({
      faved: !this.state.faved
    });
  }

  render() {
    const image_url = 'https://image.tmdb.org/t/p/w500'
    return (
      <li className="movie-thumb">
        <a onClick={this.menuToggle} className={this.state.faved ? 'heart faved' : 'heart'}></a>
        <Link to={'/movie/' + this.props.movie.id}>
          <img alt={this.props.movie.title} src={image_url + this.props.movie.poster_path} />
        </Link>
      </li>

    )
  }
}

export default MovieThumb;