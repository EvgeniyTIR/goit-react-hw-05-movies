import axios from 'axios';

const API_KEY = 'a0198fa72739dc2e82f85bee51af356c';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchQuery = async (page, query) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
