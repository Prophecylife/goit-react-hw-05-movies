import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../services/movie-service';

export const useFetchByQuery = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const film = searchParams.get('query');
    if (!film) return;

    setIsLoading(true);
    const getMovies = async () => {
      try {
        const data = await getMovieByQuery(film.toLowerCase().trim());
        setMovies(data.results);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [searchParams]);

  const onHandleSubmit = query => {
    setSearchParams({ query: query });
    setQuery(searchParams.get('query'));
  };
  return { movies, error, isLoading, onHandleSubmit };
};
