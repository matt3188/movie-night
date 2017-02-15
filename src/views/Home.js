import React, { Component } from 'react';

import {tmdb} from '../utils/api';
import DiscoverList from '../components/DiscoverList'
import FilterSelection from '../components/FilterSelection'

class Home extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      year: '2017',
      page: '1',
      results: []
    }

    this.handleTermChange = this.handleTermChange.bind( this );
  }

  loadMovies( year, page ) {
    tmdb.discoverMovies( year, page ).then( ( res ) => {
      this.setState({
        results: res.results,
        page: page,
        year: year
      });
    });
  }

  handleTermChange( filterResult ) {
    console.log(filterResult)
    let year = filterResult.year;
    let page = filterResult.page;
    this.loadMovies(year, page);
    this.setState(filterResult)
  }


  componentDidMount() {
    this.loadMovies( this.state.year, this.state.page );
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