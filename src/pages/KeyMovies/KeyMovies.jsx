import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchKeyMoviesApi } from 'services/moviesApi';
const KeyMovies = () => {
    const [keyMovies, setKeyMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const [query, setQuery] = useState('');
  const getKeyMovies = useCallback(async query => {
    loader && setLoader(true);
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
    <div>
      <ul>
        {keyMovies.map(keyMovie => (
          <li key={keyMovie.id} title={keyMovie.title}>
            <Link to={`/movies/${keyMovie.id}`} onClick={() => console.log(1)}>
              {keyMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default KeyMovies;
