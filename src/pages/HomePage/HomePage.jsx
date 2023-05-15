import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { fetchTrendingMoviesApi } from "services/moviesApi";
import PropTypes from 'prop-types';
const HomePage = ({ original_title, setLoader }) => {
    const [trendMovies, setTrendMovies] = useState([]);
    useEffect(() => {
        fetchTrendingMoviesApi().then(res => {
            setLoader(true);
            setTrendMovies(res);
        })
            .catch(error => console.log(error))
            .finally(setLoader(false))

    }, [setLoader])
    return (

        <div>
            <h2>Trending Today</h2>
        <ul>{trendMovies.map(movie =>
                <li key={movie.id} title={original_title}>
            <Link to={`movies/${movie.id}`}>{ movie.original_title ? movie.original_title : movie.name}</Link>
            </li>   
            )}</ul>
            </div>
  )
}
export default HomePage;

HomePage.propTypes = {
    original_title: PropTypes.string.isRequired,
    setLoader: PropTypes.func.isRequired,
}