import { Link } from "react-router-dom"
export const KeyMovies = ({ keyMovies }) => {
    return (
        <div>
        <ul>{keyMovies.map(keyMovie =>
            <li key={keyMovie.id} title={keyMovie.title}>
            <Link to="/movies/id" onClick={() => console.log(1)}>{keyMovie.title}</Link>
            </li>
            )}</ul>
            </div>
  )
}