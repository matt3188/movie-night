import React, { Component } from 'react';

import {tmdb} from '../utils/api';
import DiscoverList from '../components/DiscoverList'
import FilterSelection from '../components/FilterSelection'

class Home extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      year: null,
      page: null,
      totalPages: null,
      results: []
    }

    this.handleTermChange = this.handleTermChange.bind( this );
  }

  loadMovies( year, page ) {
    tmdb.discoverMovies( year, page ).then( ( res ) => {
      this.setState({
        results: res.results,
        totalPages: res.total_pages,
        year: year,
        page: page
      });
    });
  }

  handleTermChange( filterResult ) {
    let year = filterResult.year;
    let page = filterResult.page;
    this.loadMovies(year, page);
  }

  componentDidMount() {
    this.loadMovies( '2017', '1' );
  }

  render() {
    return (
      <div className="app-home">
        <FilterSelection onTermChange={ this.handleTermChange } />
        <DiscoverList {...this.state} />
      </div>
    )
  }
}

export default Home;