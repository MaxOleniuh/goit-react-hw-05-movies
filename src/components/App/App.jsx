import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrendingMoviesApi, fetchKeyMoviesApi } from 'services/moviesApi';
import { HomePage } from 'components/HomePage/HomePage';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { NotFound } from 'components/NotFound/NotFound';
import { MoviesForm } from 'components/MoviesForm/MoviesForm';
import { KeyMovies } from 'components/KeyMovies/KeyMovies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [keyMovies, setKeyMovies] = useState([]);
  const [query, setQuery] = useState('');

  const getMovies = async () => {
    setLoader(true);
    try {
      const data = await fetchTrendingMoviesApi();
      setMovies([...movies, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  const getKeyMovies = async query => {
    setLoader(true);
    try {
      const data = await fetchKeyMoviesApi(query);
      setKeyMovies([...keyMovies, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getKeyMovies(query);
  }, [query]);

  const setQueryValue = query => {
    setQuery(query);
    setKeyMovies([]);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route
          path="movies"
          element={
            <React.Fragment>
              <MoviesForm setQueryValue={setQueryValue} query={query} />
              <KeyMovies keyMovies={keyMovies} />
            </React.Fragment>
          }
        >
          <Route path="movies/1" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {loader && <Loader />}
    </>
  );
};
