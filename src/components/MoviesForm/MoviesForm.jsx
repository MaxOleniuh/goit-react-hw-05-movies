import { useState } from "react";
export const MoviesForm = ({setQueryValue}) => {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setQueryValue(input);
        console.log(input)
    }
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for a movie" onChange={(e) => setInput(e.target.value)} value={input}/>
            <button>Search</button>
        </form>
    )
}