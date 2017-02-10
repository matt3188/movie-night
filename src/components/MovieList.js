import React from 'react';

import MovieThumb from '../components/MovieThumb';

const MovieList = (props) => {

  const moviesList = props.movies.map((movie, i) => {
    return <MovieThumb key={i} movie={movie} />
  });

  return (
    <ul className="list movie-list">
      {moviesList}
    </ul>
  )
}

export default MovieList;
