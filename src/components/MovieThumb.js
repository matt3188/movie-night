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

  menuToggle = (e) => {

    this.setState({
      faved: !this.state.faved
    });
  }
  render() {
    return (
      <li className="movie-thumb">
        <a onClick={this.menuToggle} className={this.state.faved ? 'heart faved' : 'heart'}></a>
        <img alt="" src={this.props.movie.Poster} />
      </li>
    )
  }
}

export default MovieThumb;