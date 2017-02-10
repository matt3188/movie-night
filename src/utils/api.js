const api_url = 'http://www.omdbapi.com/';

const getMovies = function(searchTerm) {
  const searchMovies = `${api_url}/?s=${searchTerm}`

  return fetch(searchMovies).then((res) => res.json());
}

export {getMovies};