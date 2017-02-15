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
        <form>
          <label className="most-popular">Most popular of
            <select className="filter" onChange={ this.onInputChange.bind(this, 'year')} value={this.state.year}>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>
          </label>
          <label className="page-number">Page
            <select className="filter" onChange={ this.onInputChange.bind(this, 'page')} value={this.state.page}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default FilterSelection;
