import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetailsApi } from 'services/moviesApi';
import { ImageStyled } from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState([]);
      const [loader, setLoader] = useState(false);
  const { id } = useParams();
    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoader(true);
      try {
        const data = await fetchMovieDetailsApi(id);
        setMovieDetails(data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
            }
      finally {
          setLoader(false)
            }
    };
    fetchMovieDetails();
  }, [id]);
  const poster = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
    return (
        <div>
            {loader && <Loader />}
    <div key={id}>
      <button>
        <Link to="/">Go Back</Link>
      </button>
      <aside>
        <ImageStyled src={poster} alt={movieDetails.title} />
      </aside>
      <h2>{movieDetails.title}</h2>
      <p>User scrore: {Math.round(movieDetails.vote_average*10)}%</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      {/* <h4>Genres</h4>{movieDetails.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}   */}
      </div>
            <div>
                <h5>Additional information</h5>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
                    <Outlet/>
            </div>
        </div>
  );
};
