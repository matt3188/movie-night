import React, { Component } from 'react';

import './searchBar.css';

class SearchBar extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      searchTerm: ''
    }
  }

  onInputChange( searchTerm ) {
    this.setState({ searchTerm })
    this.props.onTermChange( searchTerm );
  }

  render() {
    return (
      <div className="search">
        <input
          className="search-bar"
          minLength={ 3 }
          placeholder="Search..."
          onChange={ event => this.onInputChange( event.target.value ) } />
      </div>
    )
  }
}

export default SearchBar;
