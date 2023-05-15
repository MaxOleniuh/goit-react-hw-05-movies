import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchKeyMoviesApi } from 'services/moviesApi';
import MoviesForm from 'components/MoviesForm/MoviesForm';

const KeyMovies = () => {
    const [keyMovies, setKeyMovies] = useState([]);
    const [query, setQuery] = useState('');
    const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get('query') ?? '';
        if (!query) return;
        try {
        fetchKeyMoviesApi(query).then(res => setKeyMovies(res))
    } catch (error) {
      console.log(error);
    } 
  }, [query, searchParams]);

    const changeFilter = e => {
        console.log(e.currentTarget.value);
        setQuery(e.currentTarget.value)
  }
   
  const onHandleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? {query} : {});
  }
    
  return (
      <div>
          <MoviesForm changeFilter={changeFilter} query={query} onHandleSubmit={onHandleSubmit} />
      <ul> 
        {keyMovies.map(keyMovie => (
          <li key={keyMovie.id} title={keyMovie.title}>
            <Link to={`/movies/${keyMovie.id}`} state={{from: location}}>
              {keyMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default KeyMovies;
