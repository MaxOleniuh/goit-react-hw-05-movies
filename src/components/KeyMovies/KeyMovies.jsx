import { Link } from "react-router-dom"
export const KeyMovies = ({ keyMovies }) => {
    console.log(keyMovies)
    return (
        <div>
        <ul>{keyMovies.map(keyMovie =>
            <li key={keyMovie.id} title={keyMovie.title}>
            <Link to="/">{keyMovie.title}</Link>
            </li>
            )}</ul>
            </div>
  )
}