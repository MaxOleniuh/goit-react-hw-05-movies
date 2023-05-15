import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCastApi } from "services/moviesApi";
import { StyledImage } from "./Cast.styled";
import noImage from '../../images/no-image.png'
import { Loader } from "components/Loader/Loader";
const Cast = () => {
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
  return (
    <ul>
            {loader && <Loader/>}
            {movieCast.cast.map(cast => <li key={cast.id}>
             <StyledImage src={cast.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}` : noImage} alt={cast.name} />
              <h3>{cast.name}</h3>
              <p>Character: {cast.character}</p>
                </li>)}
        </ul>
    )
}
export default Cast;