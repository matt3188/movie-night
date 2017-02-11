import React, { Component } from 'react';

import { Debounce } from 'react-throttle';
 
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

        <Debounce time="500" handler="onChange">
          <input
            className="search-bar"
            minLength={ 3 }
            placeholder="Search..."
            onChange={ event => this.onInputChange( event.target.value ) } />
        </Debounce>

      </div>
    )
  }
}

export default SearchBar;
