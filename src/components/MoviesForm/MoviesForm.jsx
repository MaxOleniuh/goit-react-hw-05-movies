import { useState } from "react";
import {useNavigate } from 'react-router-dom';
const MoviesForm = () => {
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [keyMovies, setKeyMovies] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        setQueryValue(input);   
        navigate(`/movies/?query=${input}`);
    }   
      const setQueryValue = () => {
          setQuery(query);
          setKeyMovies([]);
  };
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for a movie" onChange={(e) => setInput(e.target.value)} value={input}/>
            {input && <button>Search</button>}
        </form>
    )
}
export default MoviesForm;