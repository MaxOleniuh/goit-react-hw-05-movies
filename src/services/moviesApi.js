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

export const fetchMovieDetailsApi = async id => {
  try {
    const response = await axios.get(`/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCastApi = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviewsApi = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// adult: false;
// backdrop_path: null;
// genre_ids: [];
// id: 493767;
// original_language: 'en';
// original_title: 'Cat';
// overview: '';
// popularity: 0.6;
// poster_path: '/odGrK2wAxKbIIiKwOzrUOgOyozm.jpg';
// release_date: '1998-01-01';
// title: 'Cat';
// video: false;
// vote_average: 5;
// vote_count: 1;
//882569
