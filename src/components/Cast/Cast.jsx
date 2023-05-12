import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCastApi } from "services/moviesApi";

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
     const poster = `https://image.tmdb.org/t/p/w500/${movieCast.cast.profile_path}`
    return (
        <ul>
            {movieCast.cast.map(cast => <li>
             <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="" />
             <h1>{cast.name}</h1>
                </li>)}
        </ul>
    )
}