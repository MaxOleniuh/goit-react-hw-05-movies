import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '0899cb23c3aa3793d7d2c78c362ea8dc';

export const fetchTrendingMoviesApi = async () => {
  try {
    const response = await axios.get('/trending/all/day', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchKeyMoviesApi = async query => {
  try {
    const response = await axios.get('/search/movie', {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
