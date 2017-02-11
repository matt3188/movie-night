const api_url = 'https://api.themoviedb.org/3/search';

const api_key = '5cdda7bb71c5c3baa4f26614a0fe0645';

const getMovies = function(searchTerm) {
  const searchMovies = `${api_url}/movie?api_key=${api_key}&language=en-UK&query=${searchTerm}&include_adult=false`

  return fetch(searchMovies).then((res) => res.json());
}

export {getMovies};