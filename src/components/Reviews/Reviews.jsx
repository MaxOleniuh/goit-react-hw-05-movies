import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviewsApi } from "services/moviesApi";

export const Reviews = () => {
    const [movieReviews, setMovieReviews] = useState({ reviews: [] });
    const [loader, setLoader] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        const fetchMovieReviews = async () => {
            setLoader(true);
            try {
                const data = await fetchMovieReviewsApi(id);
                setMovieReviews(data);
            } catch (error) {
                console.log('Error fetching movie cast:', error);
            }
            finally {
                setLoader(false)
            }
        };
        fetchMovieReviews();
    }, [id]);
    console.log(movieReviews.results)
    return (
        movieReviews.results ? <ul>{movieReviews.results.map(review => <li key={review.id}>
            <h2>Author:{review.author}</h2>
            <p>{review.content}</p>
        </li>)}
        </ul> : <p>No reviews</p>
        // <div>1</div>
    )
}
