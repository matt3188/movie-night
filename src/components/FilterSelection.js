import React, { Component } from 'react';

class FilterSelection extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      yearSelected: ''
    }
  }

  onInputChange( yearSelected ) {
    this.setState({ yearSelected })
    this.props.onTermChange( yearSelected );
  }

  render() {
    return (
      <div className="discover-filters">
      <label className="most-popular">Most popular of
        <select className="filter" onChange={ event => this.onInputChange( event.target.value ) }>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </select>
      </label>
      </div>
    )
  }
}

export default FilterSelection;