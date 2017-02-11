const api_url = 'https://api.themoviedb.org/3';

const api_key = '5cdda7bb71c5c3baa4f26614a0fe0645';

const getMovies = function(searchTerm) {
  const searchMovies = `${api_url}/search/movie?api_key=${api_key}&language=en-UK&query=${searchTerm}&include_adult=false`

  return fetch(searchMovies).then((res) => res.json());
}

const discoverMovies = function(year) {
  const discover = `${api_url}/discover/movie?primary_release_year=${year}&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-UK&api_key=${api_key}`

  return fetch(discover).then((res) => res.json());
}

export {getMovies, discoverMovies};
