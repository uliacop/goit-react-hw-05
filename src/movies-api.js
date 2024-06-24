import axios from "axios";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjZlYTE2OGRiMzRkMGIzYzA0N2JmMGQ0Y2JlOTcyYiIsInN1YiI6IjY2MGM3MWU1YzhhNWFjMDE3Yzc5ZWI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mb0ZXQOzC06XijUTNXR3ukt76JMeOD7ALHyY1eXOHn4",
  },
};

export async function fetchTrendingMovies(page) {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`;
  const response = await axios.get(url, options);
  const data = response.data;
  console.log(response);
  return data;
}

export async function fetchMovieDetailsById(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const response = await axios.get(url, options);
  const movieDetailsById = response.data;
  return movieDetailsById;
}

export async function fetchMovieCast(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const response = await axios.get(url, options);
  const movieCasts = response.data.cast;
  return movieCasts;
}

export async function fetchMovieReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`;
  const response = await axios.get(url, options);
  const movieReviews = response.data.results;
  return movieReviews;
}

export async function fetchMovieSearch(inputSearch, page) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${inputSearch}&include_adult=false&language=en-US&page=${page}`;
  const response = await axios.get(url, options);
  const movieReviews = response.data;
  console.log(movieReviews);
  return movieReviews;
}
