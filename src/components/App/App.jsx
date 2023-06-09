import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from 'components/Loader/Loader';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Header =lazy(() => import('components/Header/Header'));
const NotFound = lazy(() => import('components/NotFound/NotFound'));
const KeyMovies = lazy(() => import('pages/KeyMovies/KeyMovies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import ('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<KeyMovies />}/>
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

