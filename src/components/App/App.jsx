import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesApi } from 'services/moviesApi';
import { HomePage } from 'components/HomePage/HomePage';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { NotFound } from 'components/NotFound/NotFound';
import { MoviesForm } from 'components/MoviesForm/MoviesForm';
export const App = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  
  const getMovies = async () => {
    setLoader(true);
    try {
      const data = await fetchMoviesApi();
      setMovies([...movies, ...data]);
      console.log(data)
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage movies={movies} />} />
        <Route path={'/movies'} element={<MoviesForm/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      {loader && <Loader />}
    </>
  );
};
