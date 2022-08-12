import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'c3dfb97c4e42ba6803ce4a8859444b9b';

export const fetchMovies = async () => {
  const { data } = await axios.get(`trending/all/day?api_key=${API_KEY}`);

  return data;
};

export const searchMovies = async (query, page) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};
