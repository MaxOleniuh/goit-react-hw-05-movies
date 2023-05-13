import { Link } from "react-router-dom"
const KeyMovies = ({ keyMovies }) => {
    return (
        <div>
        <ul>{keyMovies.map(keyMovie =>
            <li key={keyMovie.id} title={keyMovie.title}>
            <Link to={`/movies/${keyMovie.id}`} onClick={() => console.log(1)}>{keyMovie.title}</Link>
            </li>
            )}</ul>
            </div>
  )
}
export default KeyMovies;