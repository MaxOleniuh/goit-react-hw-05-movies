import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
export const MoviesForm = ({setQueryValue}) => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        setQueryValue(input);
        navigate(`/movies/?query=${input}`);

    }
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for a movie" onChange={(e) => setInput(e.target.value)} value={input}/>
            <button>Search</button>
        </form>
    )
}