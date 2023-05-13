import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy, } from 'react';
import { Loader } from 'components/Loader/Loader';
import { fetchTrendingMoviesApi, fetchKeyMoviesApi } from 'services/moviesApi';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Header =lazy(() => import('components/Header/Header'));
const NotFound = lazy(() => import('components/NotFound/NotFound'));
const MoviesForm =lazy(() => import ('components/MoviesForm/MoviesForm'))
const KeyMovies = lazy(() => import('pages/KeyMovies/KeyMovies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import ('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [keyMovies, setKeyMovies] = useState([]);
  const [query, setQuery] = useState('');

const getMovies = useCallback(async () => {
    setLoader(true);
    try {
        const data = await fetchTrendingMoviesApi();
        setMovies([...movies, ...data]);
    } catch (error) {
        console.log(error);
    } finally {
        setLoader(false);
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

useEffect(() => {
    getMovies();
}, [getMovies]);
  
  const getKeyMovies = useCallback(async (query) => {
    setLoader(true);
    try {
      const data = await fetchKeyMoviesApi(query);
      setKeyMovies([...keyMovies, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getKeyMovies(query);
  }, [getKeyMovies, query]);

  const setQueryValue = query => {
    setQuery(query);
    setKeyMovies([]);
  };

  return (
    <>
      <Header />
      <Suspense fallback={loader && <Loader />}>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route
          path="/movies"
          element={
            <React.Fragment>
              <MoviesForm setQueryValue={setQueryValue} query={query} />
              <KeyMovies keyMovies={keyMovies} />
            </React.Fragment>
          }
        />
        <Route path='movies/:id' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews/>} />
          </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
    </>
  );
};
