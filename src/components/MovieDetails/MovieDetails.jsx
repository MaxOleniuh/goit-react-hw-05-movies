import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetailsApi } from "services/moviesApi";

export const MovieDetails = () => {
      const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchMovieDetailsApi(id).then(setMovieDetails)
  }, [id]);
    console.log(movieDetails)
    const poster = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
    return (
        <div>
        <aside>
            <img src={poster} alt={movieDetails.title} />
        </aside>
            <h2>{movieDetails.title}</h2>
            <p>User scrore: {movieDetails.vote_average}</p>
        <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
        <h4>Genres</h4>
            <p>{movieDetails.genre_ids}</p>
            <button><Link to="/movies">Go Back</Link></button>
        </div>
        
    )
}