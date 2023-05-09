import { fetchMoviesApi } from 'services/moviesApi';
import { HomePage } from 'pages/HomePage';
import { useEffect, useState } from 'react';

export const App = () => {
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    try {
      const data = await fetchMoviesApi();
      setMovies([...movies, ...data]);
      console.log(data)
    }
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, [])
  return (
    <>
      <HomePage movies={movies} />
    </>
  );
};
