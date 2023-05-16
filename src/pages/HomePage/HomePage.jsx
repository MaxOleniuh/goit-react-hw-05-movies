import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { fetchTrendingMoviesApi } from "services/moviesApi";
import PropTypes from 'prop-types';
const HomePage = ({ original_title }) => {
    const [trendMovies, setTrendMovies] = useState([]);
    const [loader, setLoader] = useState([]);
    useEffect(() => {
        fetchTrendingMoviesApi().then(res => {
            setLoader(true);
            setTrendMovies(res);
        })
            .catch(error => console.log(error))
            .finally(setLoader(false))

    }, [loader, setLoader])
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
    original_title: PropTypes.string,
    setLoader: PropTypes.func,
}