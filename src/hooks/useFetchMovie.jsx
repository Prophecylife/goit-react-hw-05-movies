import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/movie-service';
import { useParams } from 'react-router-dom';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    async function getMovie() {
      try {
        const data = await getMovieDetails(movieId);

        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return { movie, loading, error };
};
