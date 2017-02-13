import React, { Component } from 'react';

import './movieThumb.css'

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
        <img alt="" src={image_url + this.props.movie.poster_path} />
      </li>
    )
  }
}

export default MovieThumb;