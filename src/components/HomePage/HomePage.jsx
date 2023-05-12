import { Link } from "react-router-dom"
export const HomePage = ({ movies, original_title }) => {
    return (
        <div>
            <h2>Trending Today</h2>
        <ul>{movies.map(movie =>
                <li key={movie.id} title={original_title}>
            <Link to={`movies/${movie.id}`}>{ movie.original_title ? movie.original_title : movie.name}</Link>
            </li>   
            )}</ul>
            </div>
  )
}
