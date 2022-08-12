import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/movie-service';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);
  return { movies, error, loading };
};
