import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCastApi } from "services/moviesApi";
import { StyledImage } from "./Cast.styled";
import noImage from '../../images/no-image.png'
export const Cast = () => {
        const [movieCast, setMovieCast] = useState({ cast: [] });
      const [loader, setLoader] = useState(false);
  const { id } = useParams();
    useEffect(() => {
        const fetchMovieCast = async () => {
            setLoader(true);
      try {
        const data = await fetchMovieCastApi(id);
        setMovieCast(data);
      } catch (error) {
        console.log('Error fetching movie cast:', error);
            }
      finally {
          setLoader(false)
            }
    };
    fetchMovieCast();
    }, [id]);
     console.log(movieCast.cast)
    return (
        <ul>
            {movieCast.cast.map(cast => <li key={cast.id}>
             <StyledImage src={cast.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}` : noImage} alt={cast.name} />
             <h1>{cast.name}</h1>
                </li>)}
        </ul>
    )
}