const tmdb = {
  api_key: "5cdda7bb71c5c3baa4f26614a0fe0645",
  api_url: "https://api.themoviedb.org/3",
  image_url: "https://image.tmdb.org/t/p",

  getMovies(searchTerm) {
    const searchMovies = `${this.api_url}/search/movie?api_key=${this.api_key}&language=en-UK&query=${searchTerm}&include_adult=false`

    return fetch(searchMovies).then((res) => res.json());
  },

  discoverMovies(year, page) {
    const discover = `${this.api_url}/discover/movie?primary_release_year=${year}&page=${page}&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-UK&api_key=${this.api_key}`

    return fetch(discover).then((res) => res.json());
  },

  lookupMovie(movieID) {
    const grabMovie = `${this.api_url}/movie/${movieID}?api_key=${this.api_key}`

    return fetch(grabMovie).then((res) => res.json());
  }
}

export {tmdb};
