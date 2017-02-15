import React from 'react';

import DiscoverThumb from './DiscoverThumb';

const DiscoverList = (props) => {

  const moviesList = props.results.map((movie, i) => {
    return <DiscoverThumb key={i} movie={movie} />
  });

  return (
    <ul className="list discover-list">
      {moviesList}
    </ul>
  )
}

export default DiscoverList;
