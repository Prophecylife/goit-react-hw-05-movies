import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/movie-service';
import { useParams } from 'react-router-dom';

export const useFetchReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);
  return { reviews, error, loading };
};
